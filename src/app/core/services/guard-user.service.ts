import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AuthenticationManagerService } from '../../features/auth/services/authentication-manager.service';
import { catchError, tap, map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardUserService {

  private guardUserSubject = new BehaviorSubject<GuardUserData | null>(null);
  private userDataRequest$: Observable<GuardUserData> | null = null;

  constructor(private readonly _authManagerService: AuthenticationManagerService) {}

  /**
   * Retrieves user data from cache if available, or makes an API call otherwise.
   * Caches the API request to prevent duplicate calls during guard evaluation.
   */
  public getUserData(): Observable<GuardUserData> {
    const currentUserData = this.guardUserSubject.value;
    if (currentUserData && currentUserData.isReady) {
      return of(currentUserData);
    }

    if (this.userDataRequest$) {
      return this.userDataRequest$;
    }

    this.userDataRequest$ = this._authManagerService.getUserData().pipe(
      map(data => ({
        isLogged: true,
        isContentCreator: data.role === 'CONTENT_CREATOR',
        isAdmin: data.role === 'ADMIN',
        isModerator: data.role === 'MODERATOR',
        isAgency: data.role === 'AGENCY',
        isReady: data.isReady,
        isActive: data.isActive
      })),
      tap(userData => {
        this.guardUserSubject.next(userData);
        this.userDataRequest$ = null; // Reset cache after success
      }),
      catchError(error => {
        const fallback: GuardUserData = {
          isLogged: false,
          isContentCreator: false,
          isAdmin: false,
          isModerator: false,
          isAgency: false,
          isReady: false,
          isActive: false
        };
        this.guardUserSubject.next(fallback);
        this.userDataRequest$ = null; // Reset cache even on error
        return of(fallback);
      }),
      shareReplay(1)
    );

    return this.userDataRequest$;
  }

  /**
   * Resets the user state completely — use on logout or route exit.
   */
  public resetUserData(): void {
    this.guardUserSubject.next(null);
    this.userDataRequest$ = null;
  }
}

// Interface representing the guard-usable user data
export interface GuardUserData {
  isContentCreator: boolean;
  isAgency: boolean;
  isAdmin: boolean;
  isModerator: boolean;
  isLogged: boolean;
  isReady: boolean;
  isActive: boolean;
}

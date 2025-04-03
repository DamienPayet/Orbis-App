import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthenticationManagerService} from '../../features/auth/services/authentication-manager.service';
import {GuardUserService} from '../services/guard-user.service';
import {of, take} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

/**
 * A route guard function that determines whether a user is allowed to access a specific route based on their readiness status.
 *
 * This function utilizes services such as GuardUserService and Router to fetch user data and navigate to appropriate
 * routes if the user is not ready or encounters an error during data retrieval.
 *
 * The guard checks:
 * - If the user is ready, the route access is granted (returns true).
 * - If the user is not ready, it navigates the user to the '/register/restore' route and denies access (returns false).
 * - If an error occurs during the retrieval of user data, it navigates the user to the 'login' route and denies access (returns false).
 *
 * @param route The currently activated route snapshot.
 * @param state The current router state snapshot.
 * @returns An observable that resolves to a boolean indicating whether the user is allowed to access the route.
 */
export const accountReadyGuard: CanActivateFn =  (route, state) => {
  const guardUserService = inject(GuardUserService);
  const router = inject(Router);

  return guardUserService.getUserData()
    .pipe(
      take(1),
      map(userData => {
        if (userData.isReady){
          // Using the userData only one time
          guardUserService.resetUserData();
          return true
        }
        else {
          router.navigate(['/register/restore'])
            .then()
          return false
        }
      }),
      catchError(() => {
        router.navigate(['login'])
          .then()
        return of(false)
      })
    )
};

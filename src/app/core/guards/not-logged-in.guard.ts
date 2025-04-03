import {CanActivateChildFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {GuardUserService} from '../services/guard-user.service';
import {of, take} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

export const notLoggedInGuard: CanActivateChildFn = (route, state) => {
  const guardUserService = inject(GuardUserService);
  const router = inject(Router);

  return guardUserService.getUserData()
    .pipe(
      take(1),
      map(userData => {
        if (!userData.isLogged) {
          // Using the userData only one time
          guardUserService.resetUserData();
          return true
        } else {
          router.navigate(['/workspace'])
            .then()
          return false
        }
      }),
      catchError(() => {
        return of(true)
      })
    )
};

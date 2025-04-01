import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthenticationManagerService} from '../../features/auth/services/authentication-manager.service';
import {of, take} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {GuardUserService} from '../services/guard-user.service';

export const agencyGuard: CanActivateFn = (childRoute, state) => {
  const guardUserService = inject(GuardUserService);
  const router = inject(Router);

  return guardUserService.getUserData()
    .pipe(
      take(1),
      map(userData => {
        if (userData.isAgency){
          // Using the userData only one time
          guardUserService.resetUserData();
          return true
        }
        else {
          router.navigate(['/'])
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

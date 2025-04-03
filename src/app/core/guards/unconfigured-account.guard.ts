import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { GuardUserService } from '../services/guard-user.service';
import { of, take } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export const unconfiguredAccountGuard: CanActivateFn = (route, state) => {
  const guardUserService = inject(GuardUserService);
  const router = inject(Router);

  return guardUserService.getUserData().pipe(
    take(1),
    map(userData => {
      if (!userData.isReady) {
        guardUserService.resetUserData();
        return true;
      } else {
        router.navigate(['/']);
        return false;
      }
    }),
    catchError(() => {
      router.navigate(['/login']);
      return of(false);
    })
  );
};

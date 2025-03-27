import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthenticationManagerService} from '../../features/auth/services/authentication-manager.service';

/**
 * A route guard function that determines whether a route can be activated based on the readiness of the account.
 * This function checks with the AuthenticationManagerService to verify if the account is correctly configured.
 *
 * @type {CanActivateFn}
 * @param {ActivatedRouteSnapshot} route - The current route snapshot associated with the guard check.
 * @param {RouterStateSnapshot} state - The current router state snapshot.
 * @returns {Promise<boolean>} A promise that resolves to true if the account is ready, otherwise false.
 */
export const accountReadyGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthenticationManagerService);
  const router = inject(Router);

  try {
    const res = await authService.isReady();
    if(!res){
      router.navigate(['/register/restore'])
        .then();
      return false
    }
    return res;
  } catch {
    return false;
  }
};

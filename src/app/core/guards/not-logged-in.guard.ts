import {CanActivateChildFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthenticationManagerService} from '../../features/auth/services/authentication-manager.service';

export const notLoggedInGuard: CanActivateChildFn = async (route, state) => {
  const authService = inject(AuthenticationManagerService);
  const router = inject(Router);

  try {
    const res = await authService.isLogged();
    if (res)
      router.navigate(['/workspace/dashboard']);
    return !res;
  } catch {
    return true;
  }
};

import {CanActivateChildFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthenticationManagerService} from '../../features/auth/services/authentication-manager.service';


export const modelGuard: CanActivateChildFn = async (childRoute, state) => {

  const authService = inject(AuthenticationManagerService);
  const router = inject(Router);

  try {
    const res = await authService.isModel();
    if (!res)
      router.navigate(['/workspace/dashboard']);
    return res;
  } catch {
    router.navigate(['/auth/login']);
    return false;
  }
};

import {CanActivateFn} from '@angular/router';
import {inject} from '@angular/core';
import {AuthenticationManagerService} from '../../features/auth/services/authentication-manager.service';

export const unconfiguredAccountGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthenticationManagerService);

  try {
    const res = await authService.isReady();
    return !res;
  } catch {
    return false;
  }

};

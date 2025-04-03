import {Route} from '@angular/router';
import {authenticatedGuard} from '../core/guards/authenticated.guard';
import {AgencyRegisterComponent} from '../features/auth/register/agency-register/agency-register.component';
import {
  ContentCreatorRegisterComponent
} from '../features/auth/register/content-creator-register/content-creator-register.component';
import {unconfiguredAccountGuard} from '../core/guards/unconfigured-account.guard';

export const registerRoutes  : Route =  {
  path: 'register',
  canActivateChild:[authenticatedGuard, unconfiguredAccountGuard],
  children: [
    { path: 'agency', component : AgencyRegisterComponent},
    { path: 'content-creator', component : ContentCreatorRegisterComponent},
    { path: 'restore', component : AgencyRegisterComponent},
  ]
};

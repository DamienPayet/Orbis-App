import {LoginComponent} from '../features/auth/login/login.component';
import {RegisterComponent} from '../features/auth/register/register.component';
import {ForgotPasswordComponent} from '../features/auth/forgot-password/forgot-password.component';
import {Route} from '@angular/router';
import {notLoggedInGuard} from '../core/guards/not-logged-in.guard';

export const loginRoutes  : Route =  {
  path: 'auth',
  canActivateChild:[notLoggedInGuard],
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
     {path: '', component: LoginComponent }
  ]
};

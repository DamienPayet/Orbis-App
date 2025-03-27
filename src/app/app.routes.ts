import {Routes} from '@angular/router';
import {adminRoutes} from './routes/admin.routes';
import {Error404Component} from './features/error/error404/error404.component';
import {authenticationRoutes} from './routes/authentication.routes';
import {workspaceRoutes} from './routes/workspace.routes';
import {registerRoutes} from './routes/register.routes';

export const routes: Routes = [
  adminRoutes,
  authenticationRoutes,
  registerRoutes,
  workspaceRoutes,
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'login', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'reset-password', redirectTo: '/auth/reset-password', pathMatch: 'full' },
  {component: Error404Component, path: '**'},
];

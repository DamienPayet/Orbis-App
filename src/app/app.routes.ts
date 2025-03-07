import {Routes} from '@angular/router';
import {adminRoutes} from './routes/admin.routes';
import {Error404Component} from './features/error/error404/error404.component';
import {loginRoutes} from './routes/authentication.routes';
import {workspaceRoutes} from './routes/workspace.routes';

export const routes: Routes = [
  adminRoutes,
  loginRoutes,
  workspaceRoutes,
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'login', redirectTo: '/auth/login', pathMatch: 'full' },
  {component: Error404Component, path: '**'},
];

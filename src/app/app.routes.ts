import { Routes } from '@angular/router';
import {adminRoutes} from './routes/admin.routes';
import {Error404Component} from './features/error/error404/error404.component';
import {loginRoutes} from './routes/authentication.routes';

export const routes: Routes = [
  adminRoutes,
  loginRoutes,
  {component : Error404Component, path : '**'}
];

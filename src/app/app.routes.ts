import { Routes } from '@angular/router';
import {adminRoutes} from './routes/admin.routes';
import {Error404Component} from './features/error/error404/error404.component';

export const routes: Routes = [
  adminRoutes,
  {component : Error404Component, path : '**'}
];

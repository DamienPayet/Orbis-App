﻿import {AdminLayoutComponent} from '../layouts/admin-layout/admin-layout.component';
import {DashboardComponent} from '../features/admin/dashboard/dashboard.component';
import {Route} from '@angular/router';

export const adminRoutes : Route = {
  path: 'admin',
  component: AdminLayoutComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent }
  ]
};

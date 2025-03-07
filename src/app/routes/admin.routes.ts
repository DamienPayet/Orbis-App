import {AdminLayoutComponent} from '../layouts/admin-layout/admin-layout.component';
import {DashboardComponent} from '../features/admin/dashboard/dashboard.component';
import {Route} from '@angular/router';
import {adminGuard} from '../core/guards/admin.guard';

export const adminRoutes : Route = {
  path: 'admin',
  component: AdminLayoutComponent,
  canActivate: [adminGuard],
  children: [
    { path: 'dashboard', component: DashboardComponent }
  ]

};

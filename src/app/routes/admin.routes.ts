import {AdminLayoutComponent} from '../layouts/admin-layout/admin-layout.component';
import {DashboardComponent} from '../features/admin/dashboard/dashboard.component';

export const adminRoutes = {
  path: 'admin',
  component: AdminLayoutComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent }
  ]
};

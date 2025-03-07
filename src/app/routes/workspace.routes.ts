import {Route} from '@angular/router';
import {DashboardComponent} from '../features/admin/dashboard/dashboard.component';
import {authenticatedGuard} from '../core/guards/authenticated.guard';
import {WorkspaceLayoutComponent} from '../layouts/workspace-layout/workspace-layout.component';

export const workspaceRoutes : Route = {
  path: 'workspace',
  component: WorkspaceLayoutComponent,
  canActivate: [authenticatedGuard],
  children: [
    { path: 'dashboard', component: DashboardComponent }
  ]
};

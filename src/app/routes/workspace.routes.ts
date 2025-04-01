import {Route} from '@angular/router';
import {DashboardComponent} from '../features/admin/dashboard/dashboard.component';
import {authenticatedGuard} from '../core/guards/authenticated.guard';
import {WorkspaceLayoutComponent} from '../layouts/workspace-layout/workspace-layout.component';
import {accountReadyGuard} from '../core/guards/account-ready.guard';

export const workspaceRoutes : Route = {
  path: 'workspace',
  component: WorkspaceLayoutComponent,
  canActivate: [authenticatedGuard,accountReadyGuard],
  children: [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent }
  ]
};

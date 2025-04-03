import {Route} from '@angular/router';
import {WorkspaceLayoutComponent} from '../layouts/workspace-layout/workspace-layout.component';
import {authenticatedGuard} from '../core/guards/authenticated.guard';
import {accountReadyGuard} from '../core/guards/account-ready.guard';
import {DashboardComponent} from '../features/admin/dashboard/dashboard.component';
import {contentCreatorGuard} from '../core/guards/content-creator.guard';

export const contentCreatorWorkspaceRoutes: Route[] = [
  {
    path: 'workspace-countent-creator',
    component: WorkspaceLayoutComponent,
    canActivate: [authenticatedGuard, accountReadyGuard, contentCreatorGuard],
    children: [
      {path: '', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent}
    ]
  }
];

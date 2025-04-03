import {Route} from '@angular/router';
import {authenticatedGuard} from '../core/guards/authenticated.guard';
import {accountReadyGuard} from '../core/guards/account-ready.guard';
import {agencyGuard} from '../core/guards/agency.guard';
import {WorspaceAgencyLayoutComponent} from '../layouts/worspace-agency-layout/worspace-agency-layout.component';
import {AgencyWsComponent} from '../features/workspace/agency-ws/agency-ws.component';

export const agencyWorkspaceRoutes: Route[] = [
  {
    path: 'workspace-agency',
    component: WorspaceAgencyLayoutComponent,
    canActivate: [authenticatedGuard, accountReadyGuard, agencyGuard ],
    children: [
      {path: '', pathMatch: 'full', component: AgencyWsComponent},
      {path: 'dashboard', component: AgencyWsComponent}
    ]
  }
];

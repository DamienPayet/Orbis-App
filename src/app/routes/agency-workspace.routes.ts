import {Route} from '@angular/router';
import {authenticatedGuard} from '../core/guards/authenticated.guard';
import {accountReadyGuard} from '../core/guards/account-ready.guard';
import {agencyGuard} from '../core/guards/agency.guard';
import {WorspaceAgencyLayoutComponent} from '../layouts/worspace-agency-layout/worspace-agency-layout.component';
import {AgencyWsComponent} from '../features/workspace/agency-ws/agency-ws.component';
import {
  AgencyEmployeesManagementComponent
} from '../features/workspace/agency-ws/employees/agency-employees-management/agency-employees-management.component';
import {
  AgencyRolesManagementComponent
} from '../features/workspace/agency-ws/employees/agency-roles-management/agency-roles-management.component';

export const agencyWorkspaceRoutes: Route[] = [
  {
    path: 'workspace-agency',
    component: WorspaceAgencyLayoutComponent,
    canActivate: [authenticatedGuard, accountReadyGuard, agencyGuard ],
    children: [
      {path: '', pathMatch: 'full', component: AgencyWsComponent},
      {path: 'dashboard', component: AgencyWsComponent},
      {path: "employee",  children: [
          {path : 'employees',component: AgencyEmployeesManagementComponent},
          {path : 'roles' , component: AgencyRolesManagementComponent},
        ]}
    ]
  }
];

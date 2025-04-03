import { Component } from '@angular/core';
import {BreadcrumbComponent} from '../../../layouts/shared-layout/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-agency-ws',
  imports: [
    BreadcrumbComponent
  ],
  templateUrl: './agency-ws.component.html',
  styleUrl: './agency-ws.component.scss'
})
export class AgencyWsComponent {
  breadcrumbList = {
    title: 'Dashboard',
    breadcrumb_path: 'Home',
    currentURL: 'Dashboard',
  }
}

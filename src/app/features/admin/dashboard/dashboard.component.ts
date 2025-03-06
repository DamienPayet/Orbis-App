import { Component } from '@angular/core';
import {BreadcrumbComponent} from '../../../layouts/admin-layout/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    BreadcrumbComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  breadcrumbList = {
    title: 'Dashboard',
    breadcrumb_path: 'Home',
    currentURL: 'Dashboard',
  }
}

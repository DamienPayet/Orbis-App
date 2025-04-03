import { Component } from '@angular/core';
import {BreadcrumbComponent} from '../../../layouts/shared-layout/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-content-creator-ws',
  imports: [
    BreadcrumbComponent
  ],
  templateUrl: './content-creator-ws.component.html',
  styleUrl: './content-creator-ws.component.scss'
})
export class ContentCreatorWsComponent {
  breadcrumbList = {
    title: 'Dashboard',
    breadcrumb_path: 'Home',
    currentURL: 'Dashboard',
  }
}

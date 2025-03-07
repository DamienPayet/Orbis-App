import {Component} from '@angular/core';
import {AuthenticationManagerService} from '../../auth/services/authentication-manager.service';
import {HttpRequestService} from '../../../core/services/utils/http-request/http-request.service';
import {BreadcrumbComponent} from '../../../layouts/shared-layout/breadcrumb/breadcrumb.component';

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
  constructor(private authService: AuthenticationManagerService, private httpRequest : HttpRequestService) {
  }
  request(): void {
    this.authService.isLogged().then(res => console.log(res))
      .catch(err => console.log(err));
    this.httpRequest.post('/auth/logout',null).subscribe(res => console.log(res));
  }
}

import {Component} from '@angular/core';
import {BreadcrumbComponent} from '../../../../../layouts/shared-layout/breadcrumb/breadcrumb.component';
import {TableListComponent} from '../../../../../shared/components/table-list/table-list.component';
import {TableListItems} from '../../../../../shared/interfaces/table-list-items.interface';

@Component({
  selector: 'app-agency-employees-management',
  imports: [
    BreadcrumbComponent,
    TableListComponent,
  ],
  templateUrl: './agency-employees-management.component.html',
  styleUrl: './agency-employees-management.component.scss'
})
export class AgencyEmployeesManagementComponent {
  breadcrumbList = {
    title: 'Employee',
    breadcrumb_path: 'Home',
    currentURL: 'employee',
  }

  items: TableListItems = {
    title: "Employee",
    checkbox: false,
    offset: 10,
    pagination: true,
    headerItems: [
      {text: "Employee ID", propertyName:"id", sort: false},
      {text: "Employee Name", propertyName:"name", sort: false},
      {text: "Email Address", propertyName:"email", sort: false},
      {text: "Contact Number", propertyName:"contact", sort: false},
      {text: "Gender", propertyName:"gender", sort: false},
      {text: "Location", propertyName:"location", sort: false},
      {text: "Status", propertyName:"status", sort: false},
    ],
    TableListItemRows: [{
      items: [
        {text: "1001"},
        {text: "Ricky"},
        {text: "re@gmail.com"},
        {text: "09090909090"},
        {text: "Male"},
        {text: "Kigali"},
        {text: "Active"},
      ]
    }],
    limit: 0
  }

}

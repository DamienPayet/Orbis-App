import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import {SharedLayoutComponent} from '../shared-layout/shared-layout.component';
import {MenuItemAdmin} from '../../Data/admin/menu-item-admin';


@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    CommonModule,
    SharedLayoutComponent
  ],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

  constructor() {

  }


  protected readonly MenuItemAdmin = MenuItemAdmin;
}

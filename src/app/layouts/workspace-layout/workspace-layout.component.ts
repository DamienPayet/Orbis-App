import { Component } from '@angular/core';
import {MenuItemWorspace} from '../../Data/admin/menu-item-worspace';
import {SharedLayoutComponent} from '../shared-layout/shared-layout.component';

@Component({
  selector: 'app-workspace-layout',
  imports: [
    SharedLayoutComponent
  ],
  templateUrl: './workspace-layout.component.html',
  styleUrl: './workspace-layout.component.scss'
})
export class WorkspaceLayoutComponent {

  protected readonly MenuItemWorspace = MenuItemWorspace;

  constructor() {
    console.log(this.MenuItemWorspace)
  }
}

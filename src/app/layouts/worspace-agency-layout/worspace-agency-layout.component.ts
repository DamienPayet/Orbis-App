import { Component } from '@angular/core';
import {SharedLayoutComponent} from "../shared-layout/shared-layout.component";
import {MenuItemAgencyWorspace} from '../../Data/workspace/menu-item-agency';

@Component({
  selector: 'app-worspace-agency-layout',
    imports: [
        SharedLayoutComponent
    ],
  templateUrl: './worspace-agency-layout.component.html',
  styleUrl: './worspace-agency-layout.component.scss'
})
export class WorspaceAgencyLayoutComponent {


  protected readonly MenuItemAgencyWorspace = MenuItemAgencyWorspace;
}

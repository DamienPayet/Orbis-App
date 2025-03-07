import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {CommonModule, Location, NgClass, PlatformLocation} from '@angular/common';
import {SafeHtmlSvgPipe} from '../../../shared/pipes/safe-html-svg.pipe';
import {TranslatePipe} from '@ngx-translate/core';
import {MenuItem} from '../../../core/Interfaces/shared/menu-item.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NgClass, RouterLink, SafeHtmlSvgPipe, TranslatePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input() sideBarMenuItem : MenuItem[] = [];
  @Output() newTitleEvent = new EventEmitter<{ title: string }>(); // DashBoard Title
  @Output() mouseHoverEvent = new EventEmitter<string>(); // Data pass Admin page

  email: string = 'marquezzzz@mail.com';
  elementValue: any = '';
  currentHref: string = "";

  constructor(private router: Router, private location: Location, private backLocation: PlatformLocation) {
    router.events.subscribe(() => {
      if (location.path() != '') {
        this.currentHref = location.path();
      } else {
        this.currentHref = '/index'
      }
    });
    backLocation.onPopState(() => {   // back click get url
      this.handleActiveMenu(window.location.pathname);
    });
    console.log(this.sideBarMenuItem)
  }

  hoverAdd(val: any) {
    const getStyle = document.body.getAttribute('data-sidebar-style')
    if (getStyle == 'icon-hover') {
      this.mouseHoverEvent.emit(val);
    }
  }

  ngOnInit(): void {
    this.elementValue = document.body.getAttribute('data-theme-version');
    this.handleActiveMenu(this.currentHref);
  }

  activeMenu: string = "";
  activeSubMenu: string = "";
  activeSubSubMenu: string = "";

  handleActiveMenu(val: any) {
    this.sideBarMenuItem.map((data: any) => {
      if (data.route == val) {
        this.activeMenu = data.title;
      }
      data.subMenu?.map((item: any) => {
        if (item.route == val) {
          this.activeMenu = data.title;
          this.activeSubMenu = item.title;
          this.activeSubSubMenu = "";
        }
        item.subsubMenu?.map((item1: any) => {
          if (item1.route == val) {
            this.activeMenu = data.title;
            this.activeSubMenu = item.title;
            this.activeSubSubMenu = item1.title
          }
        })
      })
    })
    this.newTitleEvent.emit({title: this.activeMenu});
  }

  handleMenu(val: any) {
    if (this.activeMenu == "Chat") {
      this.activeMenu = val;
    } else {
      if (this.activeMenu == val) {
        this.activeMenu = "";
      } else {
        this.activeMenu = val;
      }
    }
  }

  handleActiveSubMenu(val: any) {
    if (this.activeSubMenu == val) {
      this.activeSubMenu = "";
    } else {
      this.activeSubMenu = val;
    }
  }

}

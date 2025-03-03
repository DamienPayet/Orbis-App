import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {NavHeaderComponent} from './nav-header/nav-header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {ChatboxComponent} from './chatbox/chatbox.component';


@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavHeaderComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    ChatboxComponent
  ],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

  toggleVal: boolean = false;
  mouseOvered: boolean = false;
  currentUrl: string = '';
  constructor(private router: Router) {
    router.events.subscribe(() => {
      setTimeout(() => {
        this.handleMinHeight();
      }, 500)
    });
  }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }

  sidebarToggle(eventData: { toggleVal: boolean }) {
    this.toggleVal = eventData.toggleVal;
    setTimeout(() => {
      this.handleMinHeight();
    }, 500)
  }

  iconHoverToggle(val: any) {
    this.mouseOvered = val;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.handleMinHeight();
  }

  handleMinHeight() {
    const win_h = window.outerHeight || screen.height;
    const contentBody = document.getElementsByClassName('content-body')[0] as HTMLElement;

    if (contentBody && win_h > 0) {
      contentBody.style.minHeight = (window.innerHeight - 75) + "px";

      const bodyDataSidebarStyle = document.body.getAttribute('data-sidebar-style');
      const mainWrapperID = document.getElementById('main-wrapper')?.className;
      const metismenuHeight = document.querySelector('.deznav .metismenu')?.clientHeight || 0;

      if (bodyDataSidebarStyle && mainWrapperID) {
        if (
          (bodyDataSidebarStyle === "mini" && metismenuHeight > (window.innerHeight - 60)) ||
          (bodyDataSidebarStyle === "modern" && metismenuHeight > (window.innerHeight - 60)) ||
          (bodyDataSidebarStyle === "full" && mainWrapperID === 'show menu-toggle' && metismenuHeight > (window.innerHeight - 60))
        ) {
          contentBody.style.minHeight = (metismenuHeight + 100) + "px";
        }
      }
    }
  }

}

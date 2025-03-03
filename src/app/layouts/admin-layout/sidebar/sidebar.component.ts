
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, Location, NgClass, PlatformLocation } from '@angular/common';
import {SafeHtmlSvgPipe} from '../../../shared/pipes/safe-html-svg.pipe';
interface MenuItem {
  label?: string
  title: string;
  icon?: string;
  route?: string;
  badge?: boolean;
  subMenu?: {
    title: string;
    route?: string;
    theme?: string;
    subBadge?: boolean;
    subsubMenu?: { title: string; route: string; }[]
  }[];
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NgClass, RouterLink, SafeHtmlSvgPipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  @Output() newTitleEvent = new EventEmitter<{ title: string }>(); // DashBoard Title
  @Output() mouseHoverEvent = new EventEmitter<string>(); // Data pass Admin page

  email: string = 'marquezzzz@mail.com';
  activeToggle: string = '';
  localData: any = '';
  elementValue: any = '';
  currentHref: string = "";
  public isVisited = false;
  svgContent: string = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M7.5 18.3333V10H12.5V18.3333" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>`;

  constructor(private router: Router, private location: Location, private backLocation: PlatformLocation) {
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.currentHref = location.path();
      } else {
        this.currentHref = '/index'
      }
    });
    backLocation.onPopState(() => {   // back click get url
      this.handleActiveMenu(window.location.pathname);
    });
  }

  ngDoCheck(): void {
    this.elementValue = document.body.getAttribute('data-theme-version');
  }

  getActive(menu: any) {     //  side menu manage
    if (this.activeToggle != menu) {
      this.activeToggle = menu;
    } else {
      this.activeToggle = '';
    }
  }
  hoverAdd(val: any) {
    const getStyle = document.body.getAttribute('data-sidebar-style')
    if (getStyle == 'icon-hover') {
      this.mouseHoverEvent.emit(val);
    }
  }
  checkVisited() {
    this.isVisited = !this.isVisited;
  }
  ngOnInit(): void {
    this.elementValue = document.body.getAttribute('data-theme-version');
    this.handleActiveMenu(this.currentHref);
  }

  themeMode(menu: any) {    // dark-light theme set function
    this.activeSubMenu = '';
    localStorage.setItem("data-theme-version", menu);
    this.localData = localStorage.getItem('data-theme-version');
    this.elementValue = this.localData;
    document.body.setAttribute('data-theme-version', this.localData);
  }

  activeMenu: string = "";
  activeSubMenu: string = "";
  activeSubSubMenu: string = "";

  handleActiveMenu(val: any) {
    this.sidebarMenu.map((data: any, ind: any) => {
      if (data.route == val) {
        this.activeMenu = data.title;
      }
      data.subMenu?.map((item: any, ind: any) => {
        if (item.route == val) {
          this.activeMenu = data.title;
          this.activeSubMenu = item.title;
          this.activeSubSubMenu = "";
        }
        item.subsubMenu?.map((item1: any, ind: any) => {
          if (item1.route == val) {
            this.activeMenu = data.title;
            this.activeSubMenu = item.title;
            this.activeSubSubMenu = item1.title
          }
        })
      })
    })
    this.newTitleEvent.emit({ title: this.activeMenu });
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


  sidebarMenu: MenuItem[] = [
    {
      label: 'YOUR COMPANY',
      title: "Dashboard",
      icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.5 18.3333V10H12.5V18.3333" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
      subMenu: [
        {
          title: "Dashboard Light",
          route: "/admin",
          theme: "light"
        },
        {
          title: "Dashboard Dark",
          route: "/admin",
          theme: "dark"
        }
      ]
    },
    {
      title: "Employees",
      route: "/admin/employee",
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 14.0673C7.4407 14.0673 4.41309 14.6034 4.41309 16.7501C4.41309 18.8969 7.4215 19.4521 10.986 19.4521C14.5313 19.4521 17.5581 18.9152 17.5581 16.7693C17.5581 14.6234 14.5505 14.0673 10.986 14.0673Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 11.0054C13.3126 11.0054 15.1983 9.11881 15.1983 6.79223C15.1983 4.46564 13.3126 2.57993 10.986 2.57993C8.65944 2.57993 6.77285 4.46564 6.77285 6.79223C6.76499 9.11096 8.63849 10.9975 10.9563 11.0054H10.986Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
    },
    {
      title: "Core HR",
      route: "/admin/core-hr",
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8381 12.7317C16.4566 12.7317 16.9757 13.2422 16.8811 13.853C16.3263 17.4463 13.2502 20.1143 9.54009 20.1143C5.43536 20.1143 2.10834 16.7873 2.10834 12.6835C2.10834 9.30245 4.67693 6.15297 7.56878 5.44087C8.19018 5.28745 8.82702 5.72455 8.82702 6.36429C8.82702 10.6987 8.97272 11.8199 9.79579 12.4297C10.6189 13.0396 11.5867 12.7317 15.8381 12.7317Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8848 9.1223C19.934 6.33756 16.5134 1.84879 12.345 1.92599C12.0208 1.93178 11.7612 2.20195 11.7468 2.5252C11.6416 4.81493 11.7834 7.78204 11.8626 9.12713C11.8867 9.5459 12.2157 9.87493 12.6335 9.89906C14.0162 9.97818 17.0914 10.0862 19.3483 9.74467C19.6552 9.69835 19.88 9.43204 19.8848 9.1223Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
    },
    {
      title: "Finance",
      route: "/admin/finance",
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.64111 13.5497L9.38482 9.9837L12.5145 12.4421L15.1995 8.97684" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
              <ellipse cx="18.3291" cy="3.85021" rx="1.76201" ry="1.76201" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.6808 2.86012H7.01867C4.25818 2.86012 2.54651 4.81512 2.54651 7.57561V14.9845C2.54651 17.7449 4.22462 19.6915 7.01867 19.6915H14.9058C17.6663 19.6915 19.3779 17.7449 19.3779 14.9845V8.53213" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
    },
    {
      title: "Tasks",
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5346 2.55658H7.1072C4.28845 2.55658 2.52112 4.55216 2.52112 7.37733V14.9985C2.52112 17.8237 4.2802 19.8192 7.1072 19.8192H15.1959C18.0238 19.8192 19.7829 17.8237 19.7829 14.9985V11.3062" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.09214 10.0108L14.9424 3.16057C15.7958 2.30807 17.1791 2.30807 18.0325 3.16057L19.1481 4.27615C20.0015 5.12957 20.0015 6.51374 19.1481 7.36624L12.2648 14.2495C11.8917 14.6226 11.3857 14.8325 10.8577 14.8325H7.42389L7.51006 11.3675C7.52289 10.8578 7.73097 10.372 8.09214 10.0108Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.9014 4.21895L18.0869 8.40445" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
      subMenu: [
        {
          title: "Task",
          route: "/admin/task"
        },
        {
          title: "Task Summary",
          route: "/admin/task-summary"
        }
      ]
    },
    {
      title: "Performance",
      route: "/admin/performance",
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9732 2.52102H7.0266C4.25735 2.52102 2.52118 4.48177 2.52118 7.25651V14.7438C2.52118 17.5186 4.2491 19.4793 7.0266 19.4793H14.9723C17.7507 19.4793 19.4795 17.5186 19.4795 14.7438V7.25651C19.4795 4.48177 17.7507 2.52102 14.9732 2.52102Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M7.73657 11.0002L9.91274 13.1754L14.2632 8.82493" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>`,
    },
    {
      title: "Projects",
      route: "/admin/project",
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M6.75713 9.35157V15.64" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M11.0349 6.34253V15.64" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M15.2428 12.6746V15.64" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2952 1.83333H6.70474C3.7103 1.83333 1.83331 3.95274 1.83331 6.95306V15.0469C1.83331 18.0473 3.70157 20.1667 6.70474 20.1667H15.2952C18.2984 20.1667 20.1666 18.0473 20.1666 15.0469V6.95306C20.1666 3.95274 18.2984 1.83333 15.2952 1.83333Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>`,
    },
    {
      title: "Reports",
      route: "/admin/reports",
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5096 2.53165H7.41104C5.50437 2.52432 3.94146 4.04415 3.89654 5.9499V15.7701C3.85437 17.7071 5.38979 19.3121 7.32671 19.3552C7.35512 19.3552 7.38262 19.3561 7.41104 19.3552H14.7343C16.6538 19.2773 18.1663 17.6915 18.1525 15.7701V7.36798L13.5096 2.53165Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.2688 2.52084V5.18742C13.2688 6.48909 14.3211 7.54417 15.6228 7.54784H18.1482" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.0974 14.0786H8.1474" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.2229 10.6388H8.14655" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
    },
    {
      title: "Manage Clients",
      route: "/admin/manage-client",
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M8.79222 13.9396C12.1738 13.9396 15.0641 14.452 15.0641 16.4989C15.0641 18.5458 12.1931 19.0729 8.79222 19.0729C5.40972 19.0729 2.52039 18.5651 2.52039 16.5172C2.52039 14.4694 5.39047 13.9396 8.79222 13.9396Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M8.79223 11.0182C6.57206 11.0182 4.77173 9.21874 4.77173 6.99857C4.77173 4.7784 6.57206 2.97898 8.79223 2.97898C11.0115 2.97898 12.8118 4.7784 12.8118 6.99857C12.8201 9.21049 11.0326 11.0099 8.82064 11.0182H8.79223Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M15.1095 9.9748C16.5771 9.76855 17.7073 8.50905 17.7101 6.98464C17.7101 5.48222 16.6147 4.23555 15.1782 3.99997" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M17.0458 13.5045C18.4675 13.7163 19.4603 14.2149 19.4603 15.2416C19.4603 15.9483 18.9928 16.4067 18.2374 16.6936" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>`,
    },
    {
      title: "Blog",
      route: "/admin/blog-1",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M16.334 2.75012H7.665C4.644 2.75012 2.75 4.88912 2.75 7.91612V16.0841C2.75 19.1111 4.635 21.2501 7.665 21.2501H16.333C19.364 21.2501 21.25 19.1111 21.25 16.0841V7.91612C21.25 4.88912 19.364 2.75012 16.334 2.75012Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M11.9946 16.0001V12.0001" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M11.9896 8.20435H11.9996" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>`,
    },
    {
      label: 'OUR FEATURES',
      title: "Profile",
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 14.0673C7.4407 14.0673 4.41309 14.6034 4.41309 16.7501C4.41309 18.8969 7.4215 19.4521 10.986 19.4521C14.5313 19.4521 17.5581 18.9152 17.5581 16.7693C17.5581 14.6234 14.5505 14.0673 10.986 14.0673Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 11.0054C13.3126 11.0054 15.1983 9.11881 15.1983 6.79223C15.1983 4.46564 13.3126 2.57993 10.986 2.57993C8.65944 2.57993 6.77285 4.46564 6.77285 6.79223C6.76499 9.11096 8.63849 10.9975 10.9563 11.0054H10.986Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>`,
      subMenu: [
        {
          title: "Overview",
          route: "/admin/profile/overview"
        },
        {
          title: "Projects",
          route: "/admin/profile/projects"
        },
        {
          title: "Projects Details",
          route: "/admin/profile/projects-details"
        },
        {
          title: "Campaigns",
          route: "/admin/profile/campaigns"
        },
        {
          title: "Documents",
          route: "/admin/profile/documents"
        },
        {
          title: "Followers",
          route: "/admin/profile/followers"
        },
        {
          title: "Activity",
          route: "/admin/profile/activity"
        }
      ]
    },
    {
      title: "Accounts",
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 14.0673C7.4407 14.0673 4.41309 14.6034 4.41309 16.7501C4.41309 18.8969 7.4215 19.4521 10.986 19.4521C14.5313 19.4521 17.5581 18.9152 17.5581 16.7693C17.5581 14.6234 14.5505 14.0673 10.986 14.0673Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M10.986 11.0054C13.3126 11.0054 15.1983 9.11881 15.1983 6.79223C15.1983 4.46564 13.3126 2.57993 10.986 2.57993C8.65944 2.57993 6.77285 4.46564 6.77285 6.79223C6.76499 9.11096 8.63849 10.9975 10.9563 11.0054H10.986Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>`,
      subMenu: [
        {
          title: "Overview",
          route: "/admin/account/overview"
        },
        {
          title: "Settings",
          route: "/admin/account/settings"
        },
        {
          title: "Security",
          route: "/admin/account/security"
        },
        {
          title: "Activity",
          route: "/admin/account/activity"
        },
        {
          title: "Billing",
          route: "/admin/account/billing"
        },
        {
          title: "Statements",
          route: "/admin/account/statements"
        },
        {
          title: "Referrals",
          route: "/admin/account/referrals"
        },
        {
          title: "Api keys",
          route: "/admin/account/api-keys"
        },
        {
          title: "Logs",
          route: "/admin/account/logs"
        }
      ]
    },
    {
      title: "Apps",
      icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M7.11086 10.2878V13.7208" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M8.86244 12.0045H5.35974" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M13.0856 10.3924H12.9875" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M14.748 13.6691H14.6499" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M6.39948 0.833328C6.39948 1.5121 6.96092 2.06236 7.65349 2.06236H8.62193C9.69042 2.06617 10.5559 2.9144 10.5608 3.9616V4.5804" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0593 19.1324C11.3045 19.1791 8.60026 19.1771 5.94166 19.1324C2.99069 19.1324 0.833313 17.0275 0.833313 14.1354V9.87325C0.833313 6.98107 2.99069 4.8762 5.94166 4.8762C8.61483 4.83051 11.321 4.83146 14.0593 4.8762C17.0102 4.8762 19.1666 6.98203 19.1666 9.87325V14.1354C19.1666 17.0275 17.0102 19.1324 14.0593 19.1324Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>`,
      subMenu: [
        {
          title: "Chat",
          route: "/admin/chat"
        },
        {
          title: "Users Manager",
          subsubMenu: [
            {
              title: "User",
              route: "/admin/user"
            },
            {
              title: "Add User",
              route: "/admin/add-user"
            },
            {
              title: "Roles Listing",
              route: "/admin/user-roles"
            },
            {
              title: "Add Roles",
              route: "/admin/add-role"
            },
            {
              title: "Profile 1",
              route: "/admin/app-profile-1"
            },
            {
              title: "Profile 2",
              route: "/admin/app-profile-2"
            },
            {
              title: "Edit Profile",
              route: "/admin/edit-profile"
            },
            {
              title: "Post Details",
              route: "/admin/post-details"
            }
          ]
        },
        {
          title: "Customer Manager",
          subsubMenu: [
            {
              title: "Customer",
              route: "/admin/customer"
            },
            {
              title: "Customer Profile",
              route: "/admin/customer-profile"
            }
          ]
        },
        {
          title: "Contacts",
          route: "/admin/contacts"
        },
        {
          title: "Email",
          subsubMenu: [
            {
              title: "Compose",
              route: "/admin/email-compose"
            },
            {
              title: "Inbox",
              route: "/admin/email-inbox"
            },
            {
              title: "Read",
              route: "/admin/email-read"
            }
          ]
        },
        {
          title: "Calendar",
          route: "/admin/app-calender"
        },
        {
          title: "Shop",
          subsubMenu: [
            {
              title: "Product Grid",
              route: "/admin/ecom-product-grid"
            },
            {
              title: "Product List",
              route: "/admin/ecom-product-list"
            },
            {
              title: "Product Detail",
              route: "/admin/ecom-product-detail"
            },
            {
              title: "Order",
              route: "/admin/ecom-product-order"
            },
            {
              title: "Checkout",
              route: "/admin/ecom-checkout"
            },
            {
              title: "Invoice",
              route: "/admin/ecom-invoice"
            },
            {
              title: "Customers",
              route: "/admin/ecom-customers"
            }
          ]
        }
      ]
    },
    {
      title: "AIKit",
      icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_14_1294)"><path d="M12.1498 18.1013H8.30563L7.86828 15.8455H5.15205L4.71469 18.1013H1.05469L3.67883 3.80664H9.52563L12.1498 18.1013ZM7.43092 13.1523L6.62526 8.04211H6.46413L5.65847 13.1523H7.43092Z" stroke="#888888"/><path d="M17.4903 3.80664H13.5771V18.1013H17.4903V3.80664Z" stroke="#888888"/>
									<mask id="mask0_14_1294" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="6" y="0" width="21" height="20"><path d="M16.6266 0.00350988L6.97803 9.84375L16.8183 19.4923L26.4668 9.65207L16.6266 0.00350988Z" stroke="#888888"/></mask><g mask="url(#mask0_14_1294)"><path d="M14.7219 3.91233L14.8299 14.8991L18.7149 14.8609L18.609 4.09213L16.632 0.00825376L14.7219 3.91233ZM18.281 14.4355L15.2553 14.4652L15.1592 4.68853L15.3838 4.90622L15.8065 4.47173L16.2438 4.89717L16.6711 4.46324L17.1063 4.89177L17.5245 4.45487L17.9687 4.88023L18.1848 4.65719L18.281 14.4355ZM18.1324 4.09379L17.9573 4.27443L17.5112 3.84721L17.0972 4.27979L16.6664 3.85554L16.2373 4.29131L15.7981 3.86408L15.3748 4.29917L15.1532 4.08445L15.1525 4.00974L16.0974 2.07838L16.6448 2.43559L17.1599 2.08482L18.1324 4.09379ZM16.6397 1.91931L16.2877 1.68959L16.6299 0.990098L16.9707 1.69393L16.6397 1.91931Z" stroke="#888888"/><path d="M14.8359 15.545L18.7114 15.5068L18.7072 15.0772L14.8316 15.1153L14.8359 15.545Z" stroke="#888888"/>
									<path d="M14.8521 17.1728C14.8573 17.7 15.2905 18.1248 15.8178 18.1196L17.7798 18.1003C18.0352 18.0978 18.2744 17.996 18.4532 17.8136C18.632 17.6312 18.7291 17.3901 18.7266 17.1347L18.7127 15.7235L14.8383 15.7616L14.8521 17.1728ZM18.297 17.1389C18.2984 17.2796 18.2449 17.4123 18.1465 17.5128C18.048 17.6132 17.9163 17.6693 17.7756 17.6707L15.8136 17.69C15.5232 17.6929 15.2846 17.4589 15.2818 17.1686L15.2721 16.1871L18.2874 16.1574L18.297 17.1389Z" stroke="#888888"/></g></g><defs><clipPath id="clip0_14_1294">
									<rect width="20" height="20" stroke="#888888"/></clipPath></defs>
								</svg>`,
      subMenu: [
        {
          title: "Auto Writer",
          route: "/admin/aikit/auto-writer"
        },
        {
          title: "Scheduled",
          route: "/admin/aikit/scheduled"
        },
        {
          title: "Repurpose",
          route: "/admin/aikit/repurpose"
        },
        {
          title: "RSS",
          route: "/admin/aikit/rss"
        },
        {
          title: "Chatbot",
          route: "/admin/aikit/chatbot"
        },
        {
          title: "Fine-tune Models",
          route: "/admin/aikit/fine-tune-models"
        },
        {
          title: "AI Menu Prompts",
          route: "/admin/aikit/prompt"
        },
        {
          title: "Settings",
          route: "/admin/aikit/setting"
        },
        {
          title: "Export/Import Settings",
          route: "/admin/aikit/import"
        }
      ]
    },
    {
      title: "CMS",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8064 7.62355L20.184 6.54346C19.6574 5.62954 18.4905 5.31426 17.5753 5.83866V5.83866C17.1397 6.09528 16.6198 6.16809 16.1305 6.04103C15.6411 5.91396 15.2224 5.59746 14.9666 5.16131C14.8021 4.88409 14.7137 4.56833 14.7103 4.24598V4.24598C14.7251 3.72916 14.5302 3.22834 14.1698 2.85761C13.8094 2.48688 13.3143 2.2778 12.7973 2.27802H11.5433C11.0367 2.27801 10.5511 2.47985 10.1938 2.83888C9.83644 3.19791 9.63693 3.68453 9.63937 4.19106V4.19106C9.62435 5.23686 8.77224 6.07675 7.72632 6.07664C7.40397 6.07329 7.08821 5.98488 6.81099 5.82035V5.82035C5.89582 5.29595 4.72887 5.61123 4.20229 6.52516L3.5341 7.62355C3.00817 8.53633 3.31916 9.70255 4.22975 10.2322V10.2322C4.82166 10.574 5.18629 11.2055 5.18629 11.889C5.18629 12.5725 4.82166 13.204 4.22975 13.5457V13.5457C3.32031 14.0719 3.00898 15.2353 3.5341 16.1453V16.1453L4.16568 17.2345C4.4124 17.6797 4.82636 18.0082 5.31595 18.1474C5.80554 18.2865 6.3304 18.2248 6.77438 17.976V17.976C7.21084 17.7213 7.73094 17.6515 8.2191 17.7821C8.70725 17.9128 9.12299 18.233 9.37392 18.6716C9.53845 18.9488 9.62686 19.2646 9.63021 19.5869V19.5869C9.63021 20.6435 10.4867 21.5 11.5433 21.5H12.7973C13.8502 21.5 14.7053 20.6491 14.7103 19.5961V19.5961C14.7079 19.088 14.9086 18.6 15.2679 18.2407C15.6272 17.8814 16.1152 17.6806 16.6233 17.6831C16.9449 17.6917 17.2594 17.7797 17.5387 17.9393V17.9393C18.4515 18.4653 19.6177 18.1543 20.1474 17.2437V17.2437L20.8064 16.1453C21.0615 15.7074 21.1315 15.1859 21.001 14.6963C20.8704 14.2067 20.55 13.7893 20.1108 13.5366V13.5366C19.6715 13.2839 19.3511 12.8665 19.2206 12.3769C19.09 11.8872 19.16 11.3658 19.4151 10.9279C19.581 10.6383 19.8211 10.3981 20.1108 10.2322V10.2322C21.0159 9.70283 21.3262 8.54343 20.8064 7.63271V7.63271V7.62355Z" stroke="#888888" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
								<circle cx="12.1747" cy="11.889" r="2.63616" stroke="#888888" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>`,
      subMenu: [
        {
          title: "Content",
          route: "/admin/cms-content"
        },
        {
          title: "Add Content",
          route: "/admin/cms-content-add"
        },
        {
          title: "Email Template",
          route: "/admin/cms-email-template"
        },
        {
          title: "Add Email ",
          route: "/admin/cms-email-add"
        },
        {
          title: "Menus",
          route: "/admin/cms-menus"
        },
        {
          title: "Blog",
          route: "/admin/cms-blog"
        },
        {
          title: "Add Blog",
          route: "/admin/cms-blog-add"
        },
        {
          title: "Blog Category",
          route: "/admin/cms-blog-category"
        }
      ]
    },
    {
      title: "Charts",
      icon:  `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8381 11.7317C15.4566 11.7317 15.9757 12.2422 15.8811 12.853C15.3263 16.4463 12.2502 19.1143 8.54009 19.1143C4.43536 19.1143 1.10834 15.7873 1.10834 11.6835C1.10834 8.30245 3.67693 5.15297 6.56878 4.44087C7.19018 4.28745 7.82702 4.72455 7.82702 5.36429C7.82702 9.69868 7.97272 10.8199 8.79579 11.4297C9.61886 12.0396 10.5867 11.7317 14.8381 11.7317Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M18.8848 8.12229C18.934 5.33755 15.5134 0.848777 11.345 0.92597C11.0208 0.93176 10.7612 1.20194 10.7468 1.52518C10.6416 3.81492 10.7834 6.78202 10.8626 8.12711C10.8867 8.54588 11.2157 8.87492 11.6335 8.89904C13.0162 8.97816 16.0914 9.08623 18.3483 8.74465C18.6552 8.69834 18.88 8.43202 18.8848 8.12229Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>`,
      subMenu: [
        {
          title: "Apex Chart",
          subsubMenu: [
            {
              title: "Area Charts",
              route: "/admin/apex-area"
            },
            {
              title: "Bar Charts",
              route: "/admin/apex-bar"
            },
            {
              title: "Bubble Charts",
              route: "/admin/apex-bubble"
            },
            {
              title: "Candlestick Charts",
              route: "/admin/apex-candlestick"
            },
            {
              title: "Column Charts",
              route: "/admin/apex-column"
            },
            {
              title: "Heatmap Charts",
              route: "/admin/apex-heatmap"
            },
            {
              title: "Line Charts",
              route: "/admin/apex-line"
            },
            {
              title: "Mixed / Combo Charts",
              route: "/admin/apex-mixed"
            },
            {
              title: "Pie / Donuts",
              route: "/admin/apex-pie"
            },
            {
              title: "Polar Area Charts",
              route: "/admin/apex-polar-area"
            },
            {
              title: "Radar Charts",
              route: "/admin/apex-radar"
            },
            {
              title: "RadialBar / Circle Charts",
              route: "/admin/apex-radialbar"
            },
            {
              title: "Scatter Charts",
              route: "/admin/apex-scatter"
            },
            {
              title: "Sparklines Charts",
              route: "/admin/apex-sparklines"
            },
            {
              title: "Timeline Charts",
              route: "/admin/apex-timeline"
            },
            {
              title: "Treemap Charts",
              route: "/admin/apex-treemap"
            }
          ]
        },
        {
          title: "Chartjs",
          subsubMenu: [
            {
              title: "General Chartjs",
              route: "/admin/chartjs-general"
            },
            {
              title: "Animation Charts",
              route: "/admin/chartjs-animation"
            },
            {
              title: "Bar Charts",
              route: "/admin/chartjs-bar"
            },
            {
              title: "Line Charts",
              route: "/admin/chartjs-line"
            },
            {
              title: "Area Charts",
              route: "/admin/chartjs-area"
            },
            {
              title: "Bubble Charts",
              route: "/admin/chartjs-bubble"
            }
          ]
        }
      ]
    },
    {
      title: "Bootstrap",
      icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0122 1.82893L11.6874 5.17545C11.8515 5.50399 12.1684 5.73179 12.5359 5.78451L16.2832 6.32391C17.2091 6.45758 17.5775 7.57968 16.9075 8.22262L14.1977 10.8264C13.9314 11.0825 13.8101 11.4505 13.8731 11.812L14.5126 15.488C14.6701 16.3974 13.7023 17.0911 12.8747 16.6609L9.52545 14.9241C9.1971 14.7537 8.80385 14.7537 8.47455 14.9241L5.12525 16.6609C4.29771 17.0911 3.32986 16.3974 3.48831 15.488L4.12686 11.812C4.18986 11.4505 4.06864 11.0825 3.80233 10.8264L1.09254 8.22262C0.422489 7.57968 0.790922 6.45758 1.71678 6.32391L5.4641 5.78451C5.83158 5.73179 6.14942 5.50399 6.31359 5.17545L7.98776 1.82893C8.40201 1.00148 9.59799 1.00148 10.0122 1.82893Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
      subMenu: [
        {
          title: "Accordion",
          route: "/admin/ui-accordion"
        },
        {
          title: "Alert",
          route: "/admin/ui-alert"
        },
        {
          title: "Badge",
          route: "/admin/ui-badge"
        },
        {
          title: "Button",
          route: "/admin/ui-button"
        },
        {
          title: "Button Group",
          route: "/admin/ui-button-group"
        },
        {
          title: "Card",
          route: "/admin/ui-card"
        },
        {
          title: "Carousel",
          route: "/admin/ui-carousel"
        },
        {
          title: "Dropdown",
          route: "/admin/ui-dropdown"
        },
        {
          title: "Grid",
          route: "/admin/ui-grid"
        },
        {
          title: "List Group",
          route: "/admin/ui-list-group"
        },
        {
          title: "Media Object",
          route: "/admin/ui-media-object"
        },
        {
          title: "Modal",
          route: "/admin/ui-modal"
        },
        {
          title: "Pagination",
          route: "/admin/ui-pagination"
        },
        {
          title: "Popover",
          route: "/admin/ui-popover"
        },
        {
          title: "Progressbar",
          route: "/admin/ui-progressbar"
        },
        {
          title: "Table",
          route: "/admin/ui-table"
        },
        {
          title: "Tab",
          route: "/admin/ui-tab"
        },
        {
          title: "Typography",
          route: "/admin/ui-typography"
        }
      ]
    },
    {
      title: "Material",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8064 7.62355L20.184 6.54346C19.6574 5.62954 18.4905 5.31426 17.5753 5.83866V5.83866C17.1397 6.09528 16.6198 6.16809 16.1305 6.04103C15.6411 5.91396 15.2224 5.59746 14.9666 5.16131C14.8021 4.88409 14.7137 4.56833 14.7103 4.24598V4.24598C14.7251 3.72916 14.5302 3.22834 14.1698 2.85761C13.8094 2.48688 13.3143 2.2778 12.7973 2.27802H11.5433C11.0367 2.27801 10.5511 2.47985 10.1938 2.83888C9.83644 3.19791 9.63693 3.68453 9.63937 4.19106V4.19106C9.62435 5.23686 8.77224 6.07675 7.72632 6.07664C7.40397 6.07329 7.08821 5.98488 6.81099 5.82035V5.82035C5.89582 5.29595 4.72887 5.61123 4.20229 6.52516L3.5341 7.62355C3.00817 8.53633 3.31916 9.70255 4.22975 10.2322V10.2322C4.82166 10.574 5.18629 11.2055 5.18629 11.889C5.18629 12.5725 4.82166 13.204 4.22975 13.5457V13.5457C3.32031 14.0719 3.00898 15.2353 3.5341 16.1453V16.1453L4.16568 17.2345C4.4124 17.6797 4.82636 18.0082 5.31595 18.1474C5.80554 18.2865 6.3304 18.2248 6.77438 17.976V17.976C7.21084 17.7213 7.73094 17.6515 8.2191 17.7821C8.70725 17.9128 9.12299 18.233 9.37392 18.6716C9.53845 18.9488 9.62686 19.2646 9.63021 19.5869V19.5869C9.63021 20.6435 10.4867 21.5 11.5433 21.5H12.7973C13.8502 21.5 14.7053 20.6491 14.7103 19.5961V19.5961C14.7079 19.088 14.9086 18.6 15.2679 18.2407C15.6272 17.8814 16.1152 17.6806 16.6233 17.6831C16.9449 17.6917 17.2594 17.7797 17.5387 17.9393V17.9393C18.4515 18.4653 19.6177 18.1543 20.1474 17.2437V17.2437L20.8064 16.1453C21.0615 15.7074 21.1315 15.1859 21.001 14.6963C20.8704 14.2067 20.55 13.7893 20.1108 13.5366V13.5366C19.6715 13.2839 19.3511 12.8665 19.2206 12.3769C19.09 11.8872 19.16 11.3658 19.4151 10.9279C19.581 10.6383 19.8211 10.3981 20.1108 10.2322V10.2322C21.0159 9.70283 21.3262 8.54343 20.8064 7.63271V7.63271V7.62355Z" stroke="#888888" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
								<circle cx="12.1747" cy="11.889" r="2.63616" stroke="#888888" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>`,
      subMenu: [
        {
          title: "Autocomplete",
          route: "/admin/mat-autocomplete"
        },
        {
          title: "Badge",
          route: "/admin/mat-badge"
        },
        {
          title: "Bottom Sheet",
          route: "/admin/mat-bottom-sheet"
        },
        {
          title: "Button",
          route: "/admin/mat-button"
        },
        {
          title: "Button Toggle",
          route: "/admin/mat-button-toggle"
        },
        {
          title: "Card",
          route: "/admin/mat-card"
        },
        {
          title: "Checkbox",
          route: "/admin/mat-checkbox"
        },
        {
          title: "Chips",
          route: "/admin/mat-chips"
        },
        {
          title: "Datepicker",
          route: "/admin/mat-datepicker"
        },
        {
          title: "Dialog",
          route: "/admin/mat-dialog"
        },
        {
          title: "Divider",
          route: "/admin/mat-divider"
        },
        {
          title: "Expansion Panel",
          route: "/admin/mat-expansion"
        },
        {
          title: "Form Field",
          route: "/admin/mat-form-field"
        },
        {
          title: "Grid List",
          route: "/admin/mat-grid-list"
        },
        {
          title: "Icon",
          route: "/admin/mat-icon"
        },
        {
          title: "Input",
          route: "/admin/mat-input"
        },
        {
          title: "List",
          route: "/admin/mat-list"
        },
        {
          title: "Menu",
          route: "/admin/mat-menu"
        },
        {
          title: "Paginator",
          route: "/admin/mat-paginator"
        },
        {
          title: "Progress Bar",
          route: "/admin/mat-progress-bar"
        },
        {
          title: "Progress Spinnere",
          route: "/admin/mat-progress-spinner"
        },
        {
          title: "Radio",
          route: "/admin/mat-radio"
        },
        {
          title: "Ripple",
          route: "/admin/mat-ripple"
        },
        {
          title: "Select",
          route: "/admin/mat-select"
        },
        {
          title: "Sidenav",
          route: "/admin/mat-sidenav"
        },
        {
          title: "Slide Toggle",
          route: "/admin/mat-slide-toggle"
        },
        {
          title: "Slider",
          route: "/admin/mat-slider"
        },
        {
          title: "Snack Bar",
          route: "/admin/mat-snack-bar"
        },
        {
          title: "Sort Header",
          route: "/admin/mat-sort"
        },
        {
          title: "Stepper",
          route: "/admin/mat-stepper"
        },
        {
          title: "Table",
          route: "/admin/mat-table"
        },
        {
          title: "Tab",
          route: "/admin/mat-tab"
        },
        {
          title: "Toolbar",
          route: "/admin/mat-toolbar"
        },
        {
          title: "Tooltip",
          route: "/admin/mat-tooltip"
        },
        {
          title: "Tree",
          route: "/admin/mat-tree"
        }
      ]
    },
    {
      title: "Plugins",
      icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M18.634 13.4211C18.634 16.7009 16.7007 18.6342 13.4209 18.6342H6.28738C2.99929 18.6342 1.06238 16.7009 1.06238 13.4211V6.27109C1.06238 2.99584 2.26688 1.06259 5.54763 1.06259H7.38096C8.03913 1.06351 8.65879 1.37242 9.05296 1.89951L9.88988 3.01234C10.2859 3.53851 10.9055 3.84834 11.5637 3.84926H14.1579C17.446 3.84926 18.6596 5.52309 18.6596 8.86984L18.634 13.4211Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M5.85754 12.2577H13.8646" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>`,
      subMenu: [
        {
          title: "Sweet Alert",
          route: "/admin/uc-sweet-alert"
        },
        {
          title: "Toastr",
          route: "/admin/uc-toastr"
        },
        {
          title: "Light Gallery",
          route: "/admin/uc-light-gallery"
        }
      ]
    },
    {
      title: "SVG Icons",
      route: "/admin/svg-icon",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7379 2.76181H8.08493C6.00493 2.75381 4.29993 4.41181 4.25093 6.49081V17.2038C4.20493 19.3168 	5.87993 21.0678 7.99293 21.1148C8.02393 21.1148 8.05393 21.1158 8.08493 21.1148H16.0739C18.1679 21.0298 19.8179 19.2998 19.8029 17.2038V8.03781L14.7379 2.76181Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.4751 2.75V5.659C14.4751 7.079 15.6231 8.23 17.0431 8.234H19.7981" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.2882 15.3585H8.88818" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.2432 11.606H8.88721" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
    },
    {
      title: "Widget",
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 5.95833C2.75 3.55189 2.77577 2.75 5.95833 2.75C9.1409 2.75 9.16667 3.55189 9.16667 5.95833C9.16667 8.36478 9.17682 9.16667 5.95833 9.16667C2.73985 9.16667 2.75 8.36478 2.75 5.95833Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8333 5.95833C12.8333 3.55189 12.8591 2.75 16.0416 2.75C19.2242 2.75 19.25 3.55189 19.25 5.95833C19.25 8.36478 19.2601 9.16667 16.0416 9.16667C12.8232 9.16667 12.8333 8.36478 12.8333 5.95833Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 16.0417C2.75 13.6352 2.77577 12.8333 5.95833 12.8333C9.1409 12.8333 9.16667 13.6352 9.16667 16.0417C9.16667 18.4481 9.17682 19.25 5.95833 19.25C2.73985 19.25 2.75 18.4481 2.75 16.0417Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8333 16.0417C12.8333 13.6352 12.8591 12.8333 16.0416 12.8333C19.2242 12.8333 19.25 13.6352 19.25 16.0417C19.25 18.4481 19.2601 19.25 16.0416 19.25C12.8232 19.25 12.8333 18.4481 12.8333 16.0417Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
      subMenu: [
        {
          title: "Wg Card",
          route: "/admin/widget-card"
        },
        {
          title: "Wg Chart",
          route: "/admin/widget-chart"
        },
        {
          title: "Wg List",
          route: "/admin/widget-list"
        }
      ]
    },
    {
      title: "Forms",
      icon: `	<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M14.4065 14.8714H7.78821" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M14.4065 11.0338H7.78821" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M10.3137 7.2051H7.78827" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5829 2.52066C14.5829 2.52066 7.54563 2.52433 7.53463 2.52433C5.00463 2.53991 3.43805 4.20458 3.43805 6.74374V15.1734C3.43805 17.7254 5.01655 19.3965 7.56855 19.3965C7.56855 19.3965 14.6049 19.3937 14.6168 19.3937C17.1468 19.3782 18.7143 17.7126 18.7143 15.1734V6.74374C18.7143 4.19174 17.1349 2.52066 14.5829 2.52066Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>`,
      subMenu: [
        {
          title: "Form Elements",
          route: "/admin/form-element"
        },
        {
          title: "CkEditor",
          route: "/admin/form-editor"
        },
        {
          title: "Picker",
          route: "/admin/form-picker"
        },
        {
          title: "Form Validation",
          route: "/admin/form-validation"
        }
      ]
    },
    {
      title: "Pages",
      icon: `	<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3691 18.7157C18.086 18.7157 19.4784 17.3242 19.4793 15.6073V15.6055V13.1305C18.3454 13.1305 17.4269 12.212 17.426 11.078C17.426 9.94504 18.3445 9.02562 19.4784 9.02562H19.4793V6.55062C19.4812 4.83279 18.0906 3.43946 16.3737 3.43762H16.3682H5.63216C3.91433 3.43762 2.52191 4.82912 2.521 6.54696V6.54787V9.10537C3.6155 9.06687 4.53308 9.92304 4.57158 11.0175C4.5725 11.0377 4.57341 11.0579 4.57341 11.078C4.57433 12.2101 3.65858 13.1286 2.5265 13.1305H2.521V15.6055C2.52008 17.3224 3.9125 18.7157 5.62941 18.7157H5.63033H16.3691Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3403 8.30788L11.905 9.45096C11.96 9.5628 12.0663 9.64071 12.1901 9.65905L13.4523 9.8433C13.7649 9.88913 13.8887 10.2723 13.6632 10.4914L12.7502 11.3805C12.6603 11.4676 12.62 11.5932 12.6402 11.717L12.8556 12.9728C12.9087 13.2835 12.5833 13.52 12.3047 13.3734L11.1762 12.7803C11.0653 12.7216 10.9333 12.7216 10.8224 12.7803L9.69491 13.3734C9.41533 13.52 9.08991 13.2835 9.14308 12.9728L9.3585 11.717C9.37958 11.5932 9.33833 11.4676 9.2485 11.3805L8.33641 10.4914C8.11091 10.2723 8.23466 9.88913 8.54633 9.8433L9.80858 9.65905C9.93233 9.64071 10.0396 9.5628 10.0946 9.45096L10.6583 8.30788C10.7977 8.02555 11.201 8.02555 11.3403 8.30788Z" stroke="#888888" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>`,
      subMenu: [
        {
          title: "Login",
          route: "/page-login"
        },
        {
          title: "Register",
          route: "/page-register"
        },
        {
          title: "Forgot Password",
          route: "/page-forgot-password"
        },
        {
          title: "Error",
          subsubMenu: [
            {
              title: "Error 400",
              route: "/page-error-400"
            },
            {
              title: "Error 403",
              route: "/page-error-403"
            },
            {
              title: "Error 404",
              route: "/page-error-404"
            },
            {
              title: "Error 500",
              route: "/page-error-500"
            },
            {
              title: "Error 503",
              route: "/page-error-503"
            }
          ]
        },
        {
          title: "Lock Screen",
          route: "/page-lock-screen"
        },
        {
          title: "Empty Page",
          route: "/admin/empty-page"
        }
      ]
    },
  ]
}

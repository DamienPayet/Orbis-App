import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgbModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Fixed property name
})
export class HeaderComponent {
  fullScreenClass: boolean = false;
  toggleMode: 'dark' | 'light' | undefined;
  localData: string | null = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      if (params.theme === 'dark' || params.theme === 'light') {
        localStorage.setItem("data-theme-version", params.theme);
      }
    });
  }

  ngDoCheck() {
    this.applyThemeMode();
  }

  applyThemeMode() {    // Theme mode dark - light
    this.localData = localStorage.getItem('data-theme-version');
    if (this.localData) {
      document.body.setAttribute('data-theme-version', this.localData);
    }
  }

  chatboxActive() { // Chatbox manage
    document.getElementById("chatBox")?.classList.add("active");
  }

  eventSidebarActive() { // Event Sidebar manage
    const sidebar = document.getElementById("eventSidebar");
    if (sidebar?.classList.contains('active')) {
      sidebar.classList.remove('active');
    } else {
      sidebar?.classList.add('active');
    }
  }

  themeMode() {     // Theme mode dark - light
    const elementValue = document.body.getAttribute('data-theme-version');
    this.localData = localStorage.getItem('data-theme-version');

    this.toggleMode = (elementValue === 'light' && this.localData === 'light') ? 'dark' : 'light';

    localStorage.setItem("data-theme-version", this.toggleMode);
    document.body.setAttribute('data-theme-version', this.toggleMode);
  }

  openFullscreen() {   // Trigger fullscreen
    const docElm = document.documentElement as HTMLElement & {
      mozRequestFullScreen(): Promise<void>;
      webkitRequestFullscreen(): Promise<void>;
      msRequestFullscreen(): Promise<void>;
    };

    if (!this.fullScreenClass) {
      this.fullScreenClass = true;
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) { /* Firefox */
        docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        docElm.webkitRequestFullscreen();
      } else if (docElm.msRequestFullscreen) { /* IE/Edge */
        docElm.msRequestFullscreen();
      }
    } else {
      const doc = document as Document & {
        mozCancelFullScreen(): Promise<void>;
        webkitExitFullscreen(): Promise<void>;
        msExitFullscreen(): Promise<void>;
      };
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if (doc.mozCancelFullScreen) { /* Firefox */
        doc.mozCancelFullScreen();
      } else if (doc.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        doc.webkitExitFullscreen();
      } else if (doc.msExitFullscreen) { /* IE/Edge */
        doc.msExitFullscreen();
      }
      this.fullScreenClass = false;
    }
  }
}

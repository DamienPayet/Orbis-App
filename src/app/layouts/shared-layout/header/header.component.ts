import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {LanguageSelectorComponent} from '../../../shared/components/language-selector/language-selector.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    LanguageSelectorComponent,
    TranslatePipe,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Fixed property name
})
export class HeaderComponent {
  fullScreenClass: boolean = false;
  localData: string | null = '';

  constructor() {
    this.localData = localStorage.getItem('data-theme-version');
    if (this.localData) {
      document.body.setAttribute('data-theme-version', this.localData);
    }else {
      this.localData = 'dark'
      localStorage.setItem('data-theme-version',this.localData);
      document.body.setAttribute('data-theme-version', 'dark');
    }
  }

  changeDarkMode() {
    if (this.localData == 'dark') {
      this.localData = 'light'
    }else{
      this.localData = 'dark'
    }
    localStorage.setItem('data-theme-version',this.localData);
    document.body.setAttribute('data-theme-version', this.localData);
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

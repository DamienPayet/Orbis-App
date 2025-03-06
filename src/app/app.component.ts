import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LanguageService} from './core/services/utils/language/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Orbis-App';
  localData: string | null = '';

  constructor(private languageService: LanguageService) {
    this.localData = localStorage.getItem('data-theme-version');
    if (this.localData) {
      document.body.setAttribute('data-theme-version', this.localData);
    }else {
      this.localData = 'dark'
      localStorage.setItem('data-theme-version',this.localData);
      document.body.setAttribute('data-theme-version', 'dark');
    }
  }


}

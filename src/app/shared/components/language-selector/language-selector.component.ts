import { Component } from '@angular/core';
import {LanguageService} from '../../../core/services/language/language.service';
import {Select2Component} from '../../plugins/select2/select2.component';

@Component({
  selector: 'app-language-selector',
  imports: [
    Select2Component
  ],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent {
  languages: { name: string; value: string; selected: boolean }[] = [];
  currentLang: string;


  constructor(private languageService: LanguageService) {
    this.currentLang = this.languageService.getCurrentLanguage();
    this.languages = this.languageService.getAvailableLanguages().map(lang => {
      return {
        name: lang,
        value: lang,
        selected : lang == this.currentLang
      };
    });

    this.currentLang = this.languageService.getCurrentLanguage();
  }

  /**
   * Changes the current language of the application.
   *
   * @param {string} lang - The language code to set as the current language.
   * @return {void} This method does not return a value.
   */
  changeLanguage(lang : string ): void {
    this.languageService.setLanguage(lang);
    this.currentLang = lang;
  }
}

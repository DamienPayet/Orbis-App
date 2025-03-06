import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'fr']);
    const browserLang = this.translate.getBrowserLang();
    this.setLanguage(browserLang ?? 'en');
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('app_lang', lang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || 'en';
  }

  getAvailableLanguages(): string[] {
    return this.translate.getLangs();
  }
}

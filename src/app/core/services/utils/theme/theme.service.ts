import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private localData: string | null;

  constructor() {
    this.localData = localStorage.getItem('data-theme-version');
    if (this.localData) {
      document.body.setAttribute('data-theme-version', this.localData);
    } else {
      this.setTheme('dark');
    }
  }

  setTheme(theme: string) {
    this.localData = theme;
    localStorage.setItem('data-theme-version', theme);
    document.body.setAttribute('data-theme-version', theme);
  }

  getTheme(): string {
    return this.localData || 'dark';
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  url = '/admin/index'
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
}

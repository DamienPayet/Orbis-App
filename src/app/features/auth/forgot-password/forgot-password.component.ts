import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {ThemeService} from '../../../core/services/utils/theme/theme.service';

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
  theme: string | null = '';

  constructor(themeService : ThemeService) {
    this.theme =themeService.getTheme()
  }
}

import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {ThemeService} from '../../../core/services/utils/theme/theme.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  hide_show: boolean = false;
  theme: string | null = '';

  constructor(themeService : ThemeService) {
    this.theme =themeService.getTheme()
  }
  passwordHide(){
    this.hide_show = !this.hide_show;
  }
  url = '/admin/index'
}

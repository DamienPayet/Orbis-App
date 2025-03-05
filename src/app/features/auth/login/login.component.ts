import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide_show: boolean = false;
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

  passwordHide(){
    this.hide_show = !this.hide_show;
  }
  url = '/admin/index'
}

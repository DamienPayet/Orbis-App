import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
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

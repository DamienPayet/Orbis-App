import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {AuthenticationManagerService} from '../services/authentication-manager.service';
import {ThemeService} from '../../../core/services/utils/theme/theme.service';
import {Unsubscribable} from '../../../core/services/utils/Unsubscribable';
import {NgClass} from '@angular/common';
import {takeUntil} from 'rxjs';

@Component({
  selector: 'app-reset-password',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    TranslatePipe,
    NgClass
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent extends Unsubscribable{
  token : string = ""
  hide_show: boolean = false;
  theme: string | null = '';
  error = false;
  errorMessage = "";
  success = false;
  successMessage = "";
  resetPasswordForm: FormGroup;

  private _authManager: AuthenticationManagerService;
  private _activatedRoute : ActivatedRoute;
  constructor(
    themeService: ThemeService,
    authManager: AuthenticationManagerService,
    activatedRoute : ActivatedRoute) {
    super();
    this._activatedRoute = activatedRoute;
    this.getRouteurParam();
    this.theme = themeService.getTheme()
    this.resetPasswordForm = this.initForm();
    this._authManager = authManager;
  }

  getRouteurParam(){
    this._activatedRoute.queryParams.subscribe(params => {
     this.token =  params['token'];
    });
  }

  initForm() {
    return new FormGroup({
      token : new FormControl(this.token),
      email: new FormControl('', [Validators.required, Validators.email]),
      newPassword: new FormControl('', [Validators.required,Validators.minLength(6)]),
      password_confirmation: new FormControl('', [Validators.required,Validators.minLength(6)])
    });
  }
  onSubmit() {
    if (this.resetPasswordForm.valid) {
      if (this.resetPasswordForm.get('newPassword')?.value !== this.resetPasswordForm.get('password_confirmation')?.value) {
        this.error = true;
        this.errorMessage = "PASSWORD_NOT_MATCH";
      }else{
        this._authManager.resetPassword(this.resetPasswordForm.value)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (data) => {
              if (data.success) {
                this.error = false;
                this.success = true;
                this.successMessage = data.message;
              }else{
                this.success = false;
                this.error = true;
                this.errorMessage = data.message;
              }
            },
            error: (error) => {
              this.error = true;
              this.errorMessage = "SERVICE_ERROR";
            }
          })
        console.log(this.resetPasswordForm.value)
      }
    }
  }

  passwordHide() {
    this.hide_show = !this.hide_show;
  }
}

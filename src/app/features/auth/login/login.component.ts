import {NgClass} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {ThemeService} from '../../../core/services/utils/theme/theme.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthenticationManagerService} from '../services/authentication-manager.service';
import {takeUntil} from 'rxjs';
import {Unsubscribable} from '../../../core/services/utils/Unsubscribable';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    TranslatePipe,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent extends Unsubscribable {
  hide_show: boolean = false;
  error: boolean = false;
  theme: string | null = '';
  loginForm: FormGroup;

  private _authManager: AuthenticationManagerService;

  constructor(themeService: ThemeService, authManager: AuthenticationManagerService) {
    super();
    this.theme = themeService.getTheme()
    this.loginForm = this.initForm()
    this._authManager = authManager;
  }

  passwordHide() {
    this.hide_show = !this.hide_show;
  }

  initForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this._authManager.loginRequest(this.loginForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
            next: (data) => {
              console.log(data);
            },
            error: (error) => {
              if (environment.debug) console.error(error);
              this.error = true;
            }
          }
        );

    }
  }


}

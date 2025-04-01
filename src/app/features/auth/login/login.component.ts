import {NgClass} from '@angular/common';
import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {ThemeService} from '../../../core/services/utils/theme/theme.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthenticationManagerService} from '../services/authentication-manager.service';
import {takeUntil} from 'rxjs';
import {Unsubscribable} from '../../../core/services/utils/Unsubscribable';
import {environment} from '../../../../environments/environment';
import {LoginResponse} from '../models/auth.models';

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
  private _router : Router;
  constructor(
    themeService: ThemeService,
    authManager: AuthenticationManagerService,
    router: Router) {
    super();
    this.theme = themeService.getTheme()
    this.loginForm = this.initForm()
    this._authManager = authManager;
    this._router = router;
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
      this.error = false;
      this._authManager.loginRequest(this.loginForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
            next: (data) => {
              if (data.response && data.response.success) {
                this.storeUserInfo(data)
                this._authManager.redirectHomePage()
              } else {
                if (environment.debug) console.error(data );
                this.error = true;
              }
            },
            error: (error) => {
              if (environment.debug) console.error(error);
              this.error = true;
            }
          }
        );

    }
  }

  storeUserInfo(response: LoginResponse) {
    localStorage.setItem('userId', response.response!.userId)
    localStorage.setItem('username', response.response!.username)
    localStorage.setItem('userRole', response.response!.userRole)
    localStorage.setItem('userType', response.response!.userType)
  }

}

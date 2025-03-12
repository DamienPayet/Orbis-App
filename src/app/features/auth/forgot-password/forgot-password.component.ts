import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {ThemeService} from '../../../core/services/utils/theme/theme.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthenticationManagerService} from '../services/authentication-manager.service';
import {Unsubscribable} from '../../../core/services/utils/Unsubscribable';
import {takeUntil} from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    RouterLink,
    TranslatePipe,
    ReactiveFormsModule
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent extends Unsubscribable {
  theme: string | null = '';
  error = false;
  errorMessage = "";
  success = false;
  successMessage = "";
  forgotPasswordForm: FormGroup;

  private _authManager: AuthenticationManagerService;
  constructor(
    themeService: ThemeService,
    authManager: AuthenticationManagerService) {
    super();
    this.theme = themeService.getTheme()
    this.forgotPasswordForm = this.initForm();
    this._authManager = authManager;
  }

  initForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      this._authManager.forgotPassword(this.forgotPasswordForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (data) => {
            if (data.success) {
              this.success = true;
              this.successMessage = data.message;
            } else {
              this.error = true;
              this.errorMessage = data.message;
            }
          },
          error: (error) => {
            this.error = true;
            this.errorMessage = "{{SERVICE_ERROR}}";
          }
        })
    }
  }
}

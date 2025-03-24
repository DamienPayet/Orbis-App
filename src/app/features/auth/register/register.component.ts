import {NgClass, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {ThemeService} from '../../../core/services/utils/theme/theme.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {phoneNumberValidator} from '../../../shared/validators/phone-number.validator';
import {Unsubscribable} from '../../../core/services/utils/Unsubscribable';
import {AuthenticationManagerService} from '../services/authentication-manager.service';
import {takeUntil} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    TranslatePipe,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent extends Unsubscribable {
  hide_show: boolean = false;
  theme: string | null = '';
  error: boolean = false;
  error_message_form: { [key: string]: string[] } = {}
  error_message: string = '';
  registerForm: FormGroup;


  constructor(themeService: ThemeService,
              private _authManager: AuthenticationManagerService,
              private _router: Router) {
    super();
    this.theme = themeService.getTheme();
    this.registerForm = this.initForm();
  }

  initForm() {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, phoneNumberValidator()]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(6)]),
      accountType: new FormControl('Agency', [Validators.required]),
      language: new FormControl(this.defineLanguage(), [Validators.required]),
    });
  }

  onSubmit() {
    if (this.registerForm.value.password != this.registerForm.value.passwordConfirmation) {
      this.error = true;
      this.error_message = "PASSWORD_NOT_MATCH";
      this.error_message_form["password"] = [""];
      this.error_message_form["passwordconfirmation"] = [""];
      return;
    }
    if (this.registerForm.valid) {
      this._authManager.registerRequest(this.registerForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          {
            next: (data) => {
              this.error = false;
              if (data.success) {
                if (this.registerForm.value.accountType == "Agency") {
                  // Redirection vers la page de configuration du compte agence
                  this._router.navigate(['/agency-configuration'])
                    .then();
                } else {
                  // Redirection vers la page de configuration du compte créateur de contenu
                  this._router.navigate(['/content-creator-configuration'])
                    .then();
                }
              } else {
                if (environment.debug) console.error(data);
                this.error_message_form = {}
                this.error = true;
                this.error_message = "SERVICE_ERROR";
              }
            },
            error: (err) => {
              this.error = true;
              this.error_message_form = {}
              if (err.status == 400 && err.error.message == "ValidationFailed") {
                err.error.errors.forEach((e: any) => {
                  const key = e.property.toLowerCase()
                  if (!this.error_message_form[key]) this.error_message_form[key] = [];
                  this.error_message_form[key].push(e.error);
                });
              } else {
                this.error_message = "SERVICE_ERROR";
              }
            }
          }
        )

    }
  }

  defineLanguage() {
    const lang = navigator.language;
    if (lang === 'fr-FR')
      return 'fr_FR'
    else
      return 'en_US'
  }

  passwordHide() {
    this.hide_show = !this.hide_show;
  }

}

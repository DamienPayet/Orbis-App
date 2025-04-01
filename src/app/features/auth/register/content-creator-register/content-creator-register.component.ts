import {NgClass, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {AuthenticationManagerService} from '../../services/authentication-manager.service';
import {ThemeService} from '../../../../core/services/utils/theme/theme.service';
import {Unsubscribable} from '../../../../core/services/utils/Unsubscribable';
import {phoneNumberValidator} from '../../../../shared/validators/phone-number.validator';
import {environment} from '../../../../../environments/environment';
import {takeUntil} from 'rxjs';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule,
    NgForOf,
    TranslatePipe
  ],
  templateUrl: './content-creator-register.component.html',
  styleUrl: './content-creator-register.component.scss'
})
export class ContentCreatorRegisterComponent extends Unsubscribable {
  theme: string | null = '';
  error: boolean = false;
  error_message_form: { [key: string]: string[] } = {}
  error_message: string = '';
  registerContentCreatorForm: FormGroup;


  constructor(themeService: ThemeService,
              private _authManager: AuthenticationManagerService,
              private _router: Router) {
    super();
    this.theme = themeService.getTheme();
    this.registerContentCreatorForm = this.initForm();
  }

  initForm() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required,phoneNumberValidator]),
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      businessType: new FormControl('',),
      website: new FormControl(''),
      logoUrl: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.registerContentCreatorForm.valid) {
      this.error = false;
      this._authManager.registerContentCreatorRequest(this.registerContentCreatorForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (data) => {
            this.error = false;
            if (data.success) {
              this._router.navigate(['/']).then();
            } else {
              this.handleError('SERVICE_ERROR');
            }
          },
          error: (err) => {
            if (environment.debug) console.error(err);
            this.error = true;
            this.error_message_form = {};
            if (err.status == 400 && err.error.message === 'ValidationFailed') {
              err.error.errors.forEach((e: any) => {
                const key = e.property.toLowerCase();
                if (!this.error_message_form[key]) this.error_message_form[key] = [];
                this.error_message_form[key].push(e.error);
              });
            } else {
              this.handleError('SERVICE_ERROR');
            }
          }
        });
    }
  }

  handleError(message: string) {
    this.error_message = message;
    this.error = true;
  }

}

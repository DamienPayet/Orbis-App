import { Component } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {ThemeService} from '../../../../core/services/utils/theme/theme.service';
import {AuthenticationManagerService} from '../../services/authentication-manager.service';
import {takeUntil} from 'rxjs';
import {Unsubscribable} from '../../../../core/services/utils/Unsubscribable';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-agency-register',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, TranslatePipe, NgForOf],
  templateUrl: './agency-register.component.html',
  styleUrl: './agency-register.component.scss'
})
export class AgencyRegisterComponent extends Unsubscribable {
  hide_show: boolean = false;
  theme: string | null = '';
  error: boolean = false;
  error_message_form: { [key: string]: string[] } = {}
  error_message: string = '';
  success: boolean = false;
  success_message: string = '';
  registerAgencyForm: FormGroup;

  constructor(
    themeService: ThemeService,
    private _authManager: AuthenticationManagerService,
    private _router: Router
  ) {
    super();
    this.theme = themeService.getTheme();
    this.registerAgencyForm = this.initForm();
  }

  initForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      legalName: new FormControl('', [Validators.required]),
      taxId: new FormControl('', [Validators.required]),
      registrationNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      businessType: new FormControl(''),
      website: new FormControl(''),
      logoUrl: new FormControl('')
    });
  }

  onSubmit() {
    if (this.registerAgencyForm.valid) {
      this.error = false;
      this._authManager.registerAgencyRequest(this.registerAgencyForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (data) => {
            this.error = false;
            if (data.success) {
              this.success = true;
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

  passwordHide() {
    this.hide_show = !this.hide_show;
  }
}

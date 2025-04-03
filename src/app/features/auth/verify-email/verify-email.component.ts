import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {AuthenticationManagerService} from '../services/authentication-manager.service';
import {takeUntil} from 'rxjs';
import {Unsubscribable} from '../../../core/services/utils/Unsubscribable';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-verify-email',
  imports: [
    TranslatePipe,
    NgIf,
    RouterLink,
  ],
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.scss'
})
export class VerifyEmailComponent extends Unsubscribable{
  validationParams : {token : string, email : string} = {token : '', email : ''};
  validated : boolean = false;
  error : boolean = false;
  resend_error :boolean = false;
  resend_success :boolean = false;
  is_logged  : boolean = localStorage.getItem('userId') != null || localStorage.getItem('userId') != "";
  constructor(
    private _activatedRoute : ActivatedRoute,
    private _authManager : AuthenticationManagerService,
  ) {
    super();
    this.getRouteurParam();
  }


  /**
   * Extracts query parameters from the route and assigns their values to the
   * corresponding properties in the validationParams object.
   *
   * The method subscribes to the queryParams observable from the activated route
   * and maps 'token' and 'email' query parameters to the validationParams object's
   * token and email properties.
   *
   * @return {void} This method does not return a value.
   */
  getRouteurParam(){
    this._activatedRoute.queryParams.subscribe(params => {
      this.validationParams.token =  params['token'];
      this.validationParams.email =  params['email'];
    });
  }

  /**
   * Handles form submission by verifying email validation parameters using the authentication manager.
   * Upon successful verification, sets the validated property to true.
   * In case of an error or unsuccessful verification, sets the error property to true.
   *
   * @return {void} Does not return any value.
   */
  onSubmit(){
    this.error = false;
    this._authManager.verifyEmail(this.validationParams)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          if (data.success ){
            this.validated = true;
          }
          else {
            this.error = true;
          }
        },
        error: () => {
          this.error = true;
        }
      })
  }

  /**
   * Handles the submission of the resend email verification request.
   * It interacts with the authentication manager to resend the email
   * verification for the provided email address contained in the validation parameters.
   * Updates component state based on the success or failure of the request.
   *
   * @return {void} Does not return a value.
   */
  onSubmitResend(){
    this.resend_error = false;
    this._authManager.resendEmailVerification(this.validationParams.email)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          if (data.success ){
            this.resend_success = true;
          }
          else {
            this.resend_error = true;
          }
        }
      })
  }

}

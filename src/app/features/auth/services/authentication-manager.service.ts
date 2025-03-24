import {Injectable} from '@angular/core';
import {HttpRequestService} from '../../../core/services/utils/http-request/http-request.service';
import {endpoints} from '../../../Data/endpoints/endpoint';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  LoginRequest,
  LoginResponse, RegisterRequest, RegisterResponse, ResetPasswordRequest, ResetPasswordResponse
} from '../models/auth.models';
import {UserInfoResponseInterfaces} from '../../../core/Interfaces/shared/user-info-response.interfaces';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';

/**
 * Service responsible for managing user authentication and role-based redirection.
 * Provides methods for handling login requests, token refresh, role validation,
 * user authentication status checks, and homepage redirection.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationManagerService {

  constructor(
    private _httpRequest: HttpRequestService
    , private _router: Router) {
  }


  /**
   * Initiates a login request by sending user credentials to the authentication endpoint.
   *
   * @param {LoginRequest} credentials - The login credentials containing the necessary information, such as username and password.
   * @return {Observable<LoginResponse>} An Observable that emits the response from the login request or errors if the request fails.
   */
  loginRequest(credentials: LoginRequest): Observable<LoginResponse> {
    return this._httpRequest.postWithCredentials<LoginRequest, LoginResponse>(endpoints.authEndpoints.login, credentials).pipe(
      catchError(error => {
        if (environment.debug)
          console.error('Erreur de connexion :', error);
        throw error;
      })
    );
  }

  /**
   * Sends a register request to create a new account and returns the server response.
   *
   * @param {RegisterRequest} accountInformation - The information required to register a new account.
   * @return {Observable<RegisterResponse>} An observable emitting the response of the registration process.
   */
  registerRequest(accountInformation : RegisterRequest): Observable<RegisterResponse> {
    return this._httpRequest.postWithCredentials<RegisterRequest, RegisterResponse>(endpoints.authEndpoints.register, accountInformation).pipe(
      catchError(error => {
        if (environment.debug)
          console.error('Erreur à l\'enregistement du compte :', error);
        throw error;
      })
    );
  }

  /**
   * Initiates a token refresh request to the authentication endpoint.
   * This function sends a POST request with credentials to the refresh token endpoint
   * and processes the response. If an error occurs during the request, it logs the error
   * and rethrows it for further handling.
   *
   * @return {Observable<LoginResponse>} An observable that emits the server's response containing
   * the refreshed login information.
   */
  refreshTokenRequest(): Observable<LoginResponse> {
    return this._httpRequest.postWithCredentials<{}, LoginResponse>(endpoints.authEndpoints.refresh, {}).pipe(
      catchError(error => {
        if (environment.debug)
          console.error('Erreur rafraichissement du token :', error);
        throw error;
      })
    )
  }


  /**
   * Triggers the process for resetting a user's password by sending a request to the server
   * with the provided email address.
   *
   * @param {ForgotPasswordRequest} email - The email address associated with the user's account to start the password reset process.
   * @return {Observable<ForgotPasswordResponse>} An observable that emits the server response for the password reset request.
   */
  forgotPassword(email: ForgotPasswordRequest): Observable<ForgotPasswordResponse> {
    return this._httpRequest.postWithCredentials<ForgotPasswordRequest, ForgotPasswordResponse>(endpoints.authEndpoints.forgotPassword, email).pipe(
      catchError(error => {
        if (environment.debug)
          console.error('Erreur mot de passe oublié :', error)
        throw error
      })
    )
  }
  /**
   * Resets the user's password based on the provided credentials.
   *
   * @param {ResetPasswordRequest} credentials - The object containing the necessary information to reset the password, such as email or verification data.
   * @return {Observable<ResetPasswordResponse>} An observable that emits the response of the password reset operation.
   */
  resetPassword(credentials: ResetPasswordRequest): Observable<ResetPasswordResponse> {
    return this._httpRequest.postWithCredentials<ResetPasswordRequest, ResetPasswordResponse>(endpoints.authEndpoints.resetPassword, credentials).pipe(
      catchError(error => {
        if (environment.debug)
          console.error('Erreur réinitialisation du mot de passe :', error)
        throw error
      })
    )
  }
  /**
   * Logs out the current user by removing their session details from local storage
   * and making an HTTP request to the server to terminate the session.
   *
   * @return {Observable<any>} An observable that resolves when the logout operation is complete,
   *                           or emits an error if the logout request fails.
   */
  logout(): Observable<any> {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('userRole');
    return this._httpRequest.postWithCredentials<{}, {}>(endpoints.authEndpoints.logout, {}).pipe(
      catchError(error => {
        if (environment.debug)
          console.error('Erreur de déconnexion :', error);
        throw error;
      })
    )
  }

  /**
   * Determines if the current user has the role of 'Administrator'.
   *
   * @return {Promise<boolean>} A promise that resolves to true if the user's role is 'Administrator', otherwise false.
   * The promise may reject with an error if the HTTP request fails.
   */
  isAdmin(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this._httpRequest.getWithCredentials<UserInfoResponseInterfaces>(endpoints.usersEndpoint.me).subscribe({
        next: (data) => {
          resolve(data.role === 'Administrator')
        },
        error: (error) => {
          reject(error)
        }
      })
    })
  }

  /**
   * Determines if the current user has the role of 'Agency'.
   *
   * @return {Promise<boolean>} A promise that resolves to true if the user's role is 'Agency', otherwise false.
   * The promise rejects with an error object if the HTTP request fails.
   */
  isAgency(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this._httpRequest.getWithCredentials<UserInfoResponseInterfaces>(endpoints.usersEndpoint.me).subscribe({
        next: (data) => {
          resolve(data.role === 'Agency')
        },
        error: (error) => {
          reject(error)
        }
      })
    })
  }

  /**
   * Determines if the current user has the role of 'Model'.
   *
   * @return {Promise<boolean>} A promise that resolves to true if the user's role is 'Model', otherwise false.
   */
  isModel(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this._httpRequest.getWithCredentials<UserInfoResponseInterfaces>(endpoints.usersEndpoint.me).subscribe({
        next: (data) => {
          resolve(data.role === 'Model')
        },
        error: (error) => {
          reject(error)
        }
      })
    })
  }

  /**
   * Checks if a user is currently logged in by making an HTTP request with credentials.
   * Resolves to true if the request succeeds, otherwise rejects with an error.
   * @return {Promise<boolean>} A promise that resolves to true if the user is logged in, or rejects with an error.
   */
  isLogged(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this._httpRequest.getWithCredentials<UserInfoResponseInterfaces>(endpoints.usersEndpoint.me).subscribe({
        next: () => {
          resolve(true)
        },
        error: (error) => {
          reject(error)
        }
      })
    })
  }


  /**
   * Redirects the user to the appropriate homepage based on their role.
   * It checks the userRole stored in localStorage and navigates to the corresponding route.
   * If no userRole is found or the role is unrecognized, the user is redirected to the login page.
   *
   * @return {void} No return value.
   */
  redirectHomePage() {
    const userRole: string | null = localStorage.getItem("userRole");

    if (!userRole) {
      this._router.navigate(['/auth/login']);
      return;
    }

    switch (userRole) {
      case "Administrator":
        this._router.navigate(['/admin/dashboard']);
        break;
      case "Model":
      case "Agency":
        this._router.navigate(['/workspace/dashboard']);
        break;
      default:
        this._router.navigate(['/auth/login']);
    }
  }

}

import {Injectable} from '@angular/core';
import {HttpRequestService} from '../../../core/services/utils/http-request/http-request.service';
import {endpoints} from '../../../Data/endpoints/endpoint';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {LoginRequest, LoginResponse} from '../models/auth.models';
import {usersEndpoint} from '../../../Data/endpoints/users.endpoint';
import {UserInfoResponseInterfaces} from '../../../core/Interfaces/shared/user-info-response.interfaces';
import {Router} from '@angular/router';

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
        console.error('Erreur de connexion :', error);
        throw error;
      })
    );
  }

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

  isLogged(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this._httpRequest.getWithCredentials<UserInfoResponseInterfaces>(endpoints.usersEndpoint.me).subscribe({
        next: (data) => {
          resolve(true)
        },
        error: (error) => {
          reject(error)
        }
      })
    })
  }

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

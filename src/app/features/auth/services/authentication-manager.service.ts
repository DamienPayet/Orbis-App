import {Injectable} from '@angular/core';
import {HttpRequestService} from '../../../core/services/utils/http-request/http-request.service';
import {endpoints} from '../../../Data/endpoints/endpoint';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {LoginRequest, LoginResponse} from '../models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationManagerService {

  constructor(private httpRequest: HttpRequestService) {
  }



  /**
   * Initiates a login request by sending user credentials to the authentication endpoint.
   *
   * @param {LoginRequest} credentials - The login credentials containing the necessary information, such as username and password.
   * @return {Observable<LoginResponse>} An Observable that emits the response from the login request or errors if the request fails.
   */
  loginRequest(credentials: LoginRequest): Observable<LoginResponse> {
    return this.httpRequest.post<LoginRequest,LoginResponse>(endpoints.authEndpoints.login, credentials).pipe(
      catchError(error => {
        console.error('Erreur de connexion :', error);
        throw error;
      })
    );
  }

}

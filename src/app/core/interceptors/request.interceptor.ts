import {HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {Observable, switchMap, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {inject} from '@angular/core';
import {AuthenticationManagerService} from '../../features/auth/services/authentication-manager.service';
import {Router} from '@angular/router';

export function RequestInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authService = inject(AuthenticationManagerService);
  const router = inject(Router);

  let lang = localStorage.getItem('app_lang')?.toLowerCase();

  if (!lang) {
    const browserLang = navigator.language.toLowerCase();
    lang = browserLang.startsWith('fr') ? 'fr_FR' : 'en_US';
  } else {
    lang = lang.startsWith('fr') ? 'fr_FR' : 'en_US';
  }

  const modifiedReq = req.clone({
    setHeaders: {
      'Accept-Language': lang
    }
  });

  return next(modifiedReq).pipe(
    catchError((error: HttpErrorResponse) => {
// Attempt to refresh the token only if the request contains the host URL,
// the caught error is an unauthorized error (401),
// and the request is not already targeting the refresh token endpoint.
      if (req.url.includes(`${environment.host}`) && error.status === 401 && !req.url.includes('refresh')) {
        return authService.refreshTokenRequest().pipe(
          switchMap(() => {
            return next(req);
          }),
          catchError(refreshError => {
            authService.logout().pipe(
              switchMap(()=> {
                router.navigate(['/auth/login']);
                return throwError(refreshError);
              })
            );
            return throwError(refreshError);
          })
        );
      }
      console.error('Erreur de la requête:', error);
      return throwError(error);
    })
  );
}

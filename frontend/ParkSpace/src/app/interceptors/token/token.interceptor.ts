import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {environment} from '../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authenticationService.currentUserToken;
    const isLoggedIn = token !== undefined;
    const isApiUrl = request.url.startsWith(`${environment.restApi}`);
    const isLoginAttempt = request.url.startsWith(`https://securetoken.googleapis.com/v1/token`);
    const isGoogleApi = request.url.startsWith(`https://www.googleapis.com/identitytoolkit`);
    if (isLoggedIn && isApiUrl && !isLoginAttempt && !isGoogleApi) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}

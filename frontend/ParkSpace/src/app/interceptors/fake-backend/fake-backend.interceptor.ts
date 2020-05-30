import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HTTP_INTERCEPTORS
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, dematerialize, materialize, mergeMap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url, method, headers, body} = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(Math.floor(Math.random() * Math.floor(10))))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        // case url.endsWith('/token') && method === 'POST':
        //   return authenticate();
        case url.endsWith('/test') && method === 'POST':
          return testResource();
        case url.startsWith(`${environment.restApi}/reservation`) && method === 'GET':
          return queryReservation();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    function testResource() {
      return ok();
    }

    function queryReservation() {
      return ok({
        total_count: 2,
        items: [
          {
            reservation_id: 'asdasd234sdfr',
            start_timestamp: 1590657137000,
            end_timestamp: 1590743537000,
            state: 'Pending',
            spot_name: 'Parkplatz am See',
            expired: false
          },
          {
            reservation_id: 'asdasd234sdfr',
            start_timestamp: 1588065137000,
            end_timestamp: 1590052337000,
            state: 'Canceled',
            spot_name: 'Sonnenparkplatz',
            expired: true
          }
        ]
      });
    }

    // tslint:disable-next-line:no-shadowed-variable
    function ok(body?) {
      return of(new HttpResponse({status: 200, body}));
    }

    function error(message) {
      return throwError({error: {message}});
    }
  }
}

export const FakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};

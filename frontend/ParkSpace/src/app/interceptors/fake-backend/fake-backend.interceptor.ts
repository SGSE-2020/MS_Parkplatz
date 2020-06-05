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
        case url.startsWith(`${environment.restApi}/reservations/latest`) && method === 'GET':
          return queryLatestReservation();
        case url.startsWith(`${environment.restApi}/reservations`) && method === 'GET':
          return queryReservation();
        case url.startsWith(`${environment.restApi}/reservations`) && method === 'POST':
          return newReservation();
        case url.startsWith(`${environment.restApi}/reservations`) && method === 'DELETE':
          return cancelReservation();
        case url.startsWith(`${environment.restApi}/users`) && method === 'GET':
          return queryUsers();
        case url.startsWith(`${environment.restApi}/areas`) && method === 'GET':
          return queryAreas();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    function newReservation() {
      return ok();
    }

    function cancelReservation() {
      return ok();
    }

    function queryAreas() {
      return ok({
        total_count: 3,
        items: [{
          id: '123-456-ABC',
          displayName: 'Parkplatz am See',
          availableSpots: 109,
          totalSpots: 324,
          amenities: {
            food_drink: true,
            bar: false,
            fast_food: false,
            amenities: true,
            shopping: false,
            facilities: true,
            two_wheeler: false,
            hotel: false,
            grill: true,
            medical_aid: true,
            gas: false,
            charging: false
          }
        },
          {
            id: 'ABC-123-456',
            displayName: 'Waldparkplatz',
            availableSpots: 25,
            totalSpots: 26,
            amenities: {
              food_drink: false,
              bar: false,
              fast_food: false,
              amenities: false,
              shopping: false,
              facilities: false,
              two_wheeler: false,
              hotel: false,
              grill: true,
              medical_aid: false,
              gas: false,
              charging: false
            }
          },
          {
            id: '123-ABC-456',
            displayName: 'Am Schwimmbad',
            availableSpots: 61,
            totalSpots: 80,
            amenities: {
              food_drink: true,
              bar: true,
              fast_food: true,
              amenities: true,
              shopping: true,
              facilities: true,
              two_wheeler: true,
              hotel: true,
              grill: false,
              medical_aid: true,
              gas: true,
              charging: true
            }
          }]
      });
    }

    function queryLatestReservation() {
      return ok({
        total_count: 1,
        items: [{
          end_timestamp: 1591712985,
          expired: false,
          reservation_id: '233b1ea1-d9d0-499a-b060-35ff9f977c35',
          spot_id: '1',
          spot_name: 'Waldparkplatz',
          start_timestamp: 1591702985,
          state: 'Pending'
        }]
      });
    }

    function queryReservation() {
      return ok({
        total_count: 10,
        items: [{
          end_timestamp: 1689343923,
          expired: false,
          reservation_id: '946e397e-743e-4676-bede-e5fbd23e23bb',
          spot_id: '1',
          spot_name: 'Parkplatz am See',
          start_timestamp: 1688343923,
          state: 'Pending'
        }, {
          end_timestamp: 1592712975,
          expired: false,
          reservation_id: '05f6a61c-d922-4401-8478-5fd1d847baf3',
          spot_id: '1',
          spot_name: 'Parkplatz am See',
          start_timestamp: 1592702885,
          state: 'Pending'
        }, {
          end_timestamp: 1591712985,
          expired: false,
          reservation_id: '233b1ea1-d9d0-499a-b060-35ff9f977c35',
          spot_id: '1',
          spot_name: 'Waldparkplatz',
          start_timestamp: 1591702985,
          state: 'Pending'
        }, {
          end_timestamp: 1591018723,
          expired: true,
          reservation_id: '383e6d06-fa01-41af-b9a5-e575dbacdcb6',
          spot_id: '1',
          spot_name: 'Am Schwimmbad',
          start_timestamp: 1590935923,
          state: 'Expired'
        }, {
          end_timestamp: 1588947923,
          expired: true,
          reservation_id: '9ec556cd-e610-4000-aba0-e22360c9b049',
          spot_id: '1',
          spot_name: 'Parkplatz am See',
          start_timestamp: 1588943923,
          state: 'Expired'
        }, {
          end_timestamp: 1589543923,
          expired: true,
          reservation_id: 'e9caf626-675f-47b6-9dce-16fad19fee33',
          spot_id: '1',
          spot_name: 'Waldparkplatz',
          start_timestamp: 1588543923,
          state: 'Cancelled'
        }, {
          end_timestamp: 1589543923,
          expired: true,
          reservation_id: 'dd02aa81-9999-4e09-9a15-139f6b069c42',
          spot_id: '1',
          spot_name: 'Waldparkplatz',
          start_timestamp: 1588543923,
          state: 'Expired'
        }, {
          end_timestamp: 1588543923,
          expired: true,
          reservation_id: '41e2d333-c9cc-4915-96df-5a56a4202ca2',
          spot_id: '1',
          spot_name: 'Parkplatz am See',
          start_timestamp: 1588443923,
          state: 'Cancelled'
        }, {
          end_timestamp: 1589343923,
          expired: true,
          reservation_id: '3fee8d77-d957-4cac-af80-e01b1c114f36',
          spot_id: '1',
          spot_name: 'Parkplatz am See',
          start_timestamp: 1588343923,
          state: 'Cancelled'
        }, {
          end_timestamp: 1559343923,
          expired: true,
          reservation_id: '9fa2f259-35a4-4065-9bd8-36c5f83af161',
          spot_id: '1',
          spot_name: 'Waldparkplatz',
          start_timestamp: 1558343923,
          state: 'Expired'
        }]
      });
    }

    function queryUsers() {
      return ok({
        username: 'NeuerUser2',
        firstName: 'Max',
        lastName: 'Muster',
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

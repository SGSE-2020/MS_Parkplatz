import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {ApiModel} from '../../models/api.model';
import {ReservationModel} from '../../models/reservation.model';
import {BookingModel} from '../../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient) {
  }

  getNextReservation(): Observable<ApiModel<ReservationModel>> {
    const href = `${environment.restApi}/reservations/latest`;
    const requestUrl = `${href}`;
    return this.httpClient.get<ApiModel<ReservationModel>>(requestUrl);
  }

  getReservations(sort: string, order: string, page: number): Observable<ApiModel<ReservationModel>> {
    const href = `${environment.restApi}/reservations`;
    const requestUrl = `${href}?sort=${sort}&order=${order}&page=${page + 1}`;
    return this.httpClient.get<ApiModel<ReservationModel>>(requestUrl);
  }

  createReservation(bookingModel: BookingModel) {
    const href = `${environment.restApi}/reservations/`;
    const requestUrl = `${href}`;
    return this.httpClient.post(requestUrl, bookingModel);
  }

  cancelReservation(reservationId: string) {
    const href = `${environment.restApi}/reservations/${reservationId}`;
    const requestUrl = `${href}`;
    return this.httpClient.delete(requestUrl);
  }
}

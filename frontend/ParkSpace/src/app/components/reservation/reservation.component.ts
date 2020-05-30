import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {merge, Observable, of as observableOf} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements AfterViewInit {
  displayedColumns: string[] = ['start', 'end', 'area', 'duration', 'state', 'actions'];
  reservationDatabase: ReservationHttpDatabase | null;
  data: Reservation[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private httpClient: HttpClient) {
  }

  ngAfterViewInit() {
    this.reservationDatabase = new ReservationHttpDatabase(this.httpClient);

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          // tslint:disable-next-line:no-non-null-assertion
          return this.reservationDatabase!.getReservation(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }
}

export interface ReservationApi {
  items: Reservation[];
  total_count: number;
}

export interface Reservation {
  start_timestamp: number;
  end_timestamp: number;
  spot_name: string;
  expired: boolean;
}

export class ReservationHttpDatabase {
  constructor(private httpClient: HttpClient) {
  }

  getReservation(sort: string, order: string, page: number): Observable<ReservationApi> {
    const href = `${environment.restApi}/reservation`;
    const requestUrl = `${href}?sort=${sort}&order=${order}&page=${page + 1}`;

    return this.httpClient.get<ReservationApi>(requestUrl);
  }
}

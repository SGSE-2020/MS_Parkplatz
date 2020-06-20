import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {ReservationModel} from '../../models/reservation.model';
import {ReservationService} from '../../services/reservation/reservation.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements AfterViewInit {
  displayedColumns: string[] = ['start', 'end', 'area', 'duration', 'state', 'actions'];
  reservationOverview: ReservationModel[] = [];
  nextReservation: ReservationModel[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private reservationService: ReservationService,
              private snackBar: MatSnackBar) {
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    this.populateNextReservation();
    this.populateItineraryOverview();
  }

  private populateNextReservation(): void {
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.reservationService.getNextReservation();
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.nextReservation = data);
  }

  private populateItineraryOverview(): void {
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.reservationService.getReservations(this.sort.active, this.sort.direction, this.paginator.pageIndex);
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
      ).subscribe(data => this.reservationOverview = data);
  }


  public getDuration(start: number, end: number): string {
    let delta = Math.abs(end - start) / 1000;

    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    const minutes = Math.floor(delta / 60) % 60;

    return `${days} Days ${hours} Hours ${minutes} Minutes`;
  }

  cancelReservation(reservationId: string) {
    this.reservationService.cancelReservation(reservationId).subscribe(res => {
      this.snackBar.open('Successfully canceled reservation', 'Reload', {
        duration: 3000
      }).onAction().subscribe(() => {
        window.location.reload();
      });
    }, error => {
      this.snackBar.open('There was an error while canceling your reservation. Please try again later', 'Reload', {
        duration: 3000
      }).onAction().subscribe(() => {
        window.location.reload();
      });
    });
  }
}

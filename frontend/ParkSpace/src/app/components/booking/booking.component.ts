import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {AreaService} from '../../services/area/area.service';
import {ReservationService} from '../../services/reservation/reservation.service';
import {AreaModel} from '../../models/area.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  places: AreaModel[] = [];

  selectedArea: string;
  consentTerms = false;
  consentPayment = false;

  form = this.fb.group({
    reservationStartDateTime: ['', [Validators.required]],
    reservationEndDateTime: ['', [Validators.required]],
    numberOfSpots: ['', [Validators.required]],
    customerNote: ['', []]
  });

  constructor(private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private areaService: AreaService,
              private reservationService: ReservationService) {
  }

  ngOnInit(): void {
    this.areaService.getAvailableAreas().subscribe(x => this.places = x.items, (err) => {
      this.snackBar.open('There was an error while loading this website.', 'Dismiss', {
        duration: 3600,
      });
      console.log(err);
    }, () => {
      this.selectedArea = this.places[0].id;
    });


    this.form.controls.numberOfSpots.setValue(1, {onlySelf: true});

    const pipe = new DatePipe('en-US');
    const now = Date.now();
    const dateTimeNow = pipe.transform(now, 'yyyy-MM-ddThh:mm');
    const dateTimeFuture = pipe.transform(now + 3600000, 'yyyy-MM-ddThh:mm');
    this.form.controls.reservationStartDateTime.setValue(dateTimeNow, {onlySelf: true});
    this.form.controls.reservationEndDateTime.setValue(dateTimeFuture, {onlySelf: true});
  }

  getParkingAreaByID(id: string): AreaModel {
    return this.places.find(i => i.id === id) || null;
  }

  consentTermChange($event: MatCheckboxChange) {
    this.consentTerms = $event.checked;

  }

  consentPaymentChange($event: MatCheckboxChange) {
    this.consentPayment = $event.checked;
  }

  submit() {
    if (this.consentTerms === false) {
      this.snackBar.open('You need to consent to our terms in order to checkout your booking.', 'Dismiss', {
        duration: 3600,
      });

      return;
    }

    if (this.consentPayment === false) {
      this.snackBar.open('You need to consent to pay in order to checkout your booking.', 'Dismiss', {
        duration: 3600,
      });

      return;
    }

    this.reservationService.createReservation({
      area_id: this.selectedArea,
      start_timestamp: new Date(this.form.controls.reservationStartDateTime.value).getTime() / 1000,
      end_timestamp: new Date(this.form.controls.reservationEndDateTime.value).getTime() / 1000,
      number_of_spots: this.form.controls.numberOfSpots.value,
      note: this.form.controls.customerNote.value,
      insurance: false,
      cleaning: false,
      chauffeur: false,
      consentTerms: false,
      consentPayment: false
    }).subscribe(() => {
      this.snackBar.open('Thank you for your booking!', 'Dismiss', {
        duration: 3600,
      });
    }, () => {
      this.snackBar.open('There was a error processing your reservation. Please try again later', 'Dismiss', {
        duration: 6000,
      });
    });
  }
}

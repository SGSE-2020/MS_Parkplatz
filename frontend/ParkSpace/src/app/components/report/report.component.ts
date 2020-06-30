import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {ReservationService} from '../../services/reservation/reservation.service';
import {ReservationModel} from '../../models/reservation.model';
import {ReportService} from '../../services/report/report.service';
import {ReportModel} from '../../models/report.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  form = this.fb.group({
    textArea: ['', [Validators.required]],
  });
  selectedReservation: any;
  reservations: ReservationModel[];

  consentTermsCheck = false;
  consentLegalCheck = false;

  constructor(private fb: FormBuilder,
              private reservationService: ReservationService,
              private reportService: ReportService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.reservationService.getReservations(null, 'ASC', null).subscribe(x => {
      this.reservations = x.items;
    });
  }

  submit() {
    if (this.consentTermsCheck === false) {
      this.snackBar.open('You need to consent to our terms in oder to proceed.', 'Dismiss', {
        duration: 3600,
      });

      return;
    }

    if (this.consentLegalCheck === false) {
      this.snackBar.open('You need to consent to our legal terms in oder to proceed.', 'Dismiss', {
        duration: 3600,
      });

      return;
    }

    const reservation = this.reservations.find(x => x.reservation_id === this.selectedReservation);

    const report: ReportModel = {
      areaId: reservation.area_id,
      reservationDate: reservation.start_timestamp,
      reservationId: reservation.reservation_id,
      userNote: this.form.controls.textArea.value
    };

    this.reportService.postReport(report).subscribe(() => {
      this.snackBar.open('Thank you for reporting problems!', 'Dismiss', {
        duration: 3600,
      });
    }, () => {
      this.snackBar.open('There was a error processing your report. Please try again later', 'Dismiss', {
        duration: 6000,
      });
    }, () => {
      this.snackBar.open('Thank you for reporting problems!', 'Dismiss', {
        duration: 3600,
      });
    });
  }

  consentTermChange($event: MatCheckboxChange) {
    this.consentTermsCheck = $event.checked;
  }

  consentLegal($event: MatCheckboxChange) {
    this.consentLegalCheck = $event.checked;
  }
}

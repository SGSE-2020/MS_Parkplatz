import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatCheckboxChange} from '@angular/material/checkbox';

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
  reservations = [
    {
      id: '123-456-ABC',
      date: 1558343923,
      displayName: 'Waldparkplatz'
    },
    {
      id: '123-ABC-456',
      date: 1588343923,
      displayName: 'Parkplatz am See'
    }
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  submit() {

  }

  consentTermChange($event: MatCheckboxChange) {

  }

  consentLegal($event: MatCheckboxChange) {

  }
}

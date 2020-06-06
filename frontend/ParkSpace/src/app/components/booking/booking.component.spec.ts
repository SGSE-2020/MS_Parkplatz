import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookingComponent} from './booking.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookingComponent],
      imports: [
        ReactiveFormsModule,
        MatSnackBarModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

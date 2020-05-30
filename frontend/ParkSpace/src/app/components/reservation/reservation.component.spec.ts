import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReservationComponent} from './reservation.component';
import {MatTableModule} from '@angular/material/table';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationComponent],
      imports: [MatTableModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

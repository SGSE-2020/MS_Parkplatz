import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItineraryComponent} from './itinerary.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ItineraryComponent', () => {
  let component: ItineraryComponent;
  let fixture: ComponentFixture<ItineraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItineraryComponent],
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        MatPaginatorModule,
        MatSortModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

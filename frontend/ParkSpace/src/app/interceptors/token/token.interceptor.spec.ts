import {TestBed} from '@angular/core/testing';

import {TokenInterceptor} from './token.interceptor';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';
import {RouterTestingModule} from '@angular/router/testing';

describe('TokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenInterceptor
    ],
    imports: [
      AngularFireModule.initializeApp(environment.firebase),
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const interceptor: TokenInterceptor = TestBed.inject(TokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

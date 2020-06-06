import {TestBed} from '@angular/core/testing';

import {FakeBackendInterceptor} from './fake-backend.interceptor';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../../environments/environment';

describe('FakeBackendInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FakeBackendInterceptor
    ],
    imports: [
      AngularFireModule.initializeApp(environment.firebase)
    ]
  }));

  it('should be created', () => {
    const interceptor: FakeBackendInterceptor = TestBed.inject(FakeBackendInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

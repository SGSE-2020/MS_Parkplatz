import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {UserModel} from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<UserModel> {
    const href = `${environment.restApi}/users`;
    const requestUrl = `${href}`;
    return this.httpClient.get<UserModel>(requestUrl);
  }
}

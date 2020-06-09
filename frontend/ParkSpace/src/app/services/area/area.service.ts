import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiModel} from '../../models/api.model';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AreaModel} from '../../models/area.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private httpClient: HttpClient) {
  }

  getAvailableAreas(): Observable<ApiModel<AreaModel>> {
    const href = `${environment.restApi}/areas`;
    const requestUrl = `${href}`;
    return this.httpClient.get<ApiModel<AreaModel>>(requestUrl);
  }
}

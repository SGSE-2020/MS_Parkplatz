import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ReportModel} from '../../models/report.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpClient: HttpClient) {
  }

  postReport(reportModel: ReportModel): Observable<any> {
    const href = `${environment.restApi}/reports`;
    const requestUrl = `${href}`;
    return this.httpClient.post(requestUrl, reportModel);
  }
}

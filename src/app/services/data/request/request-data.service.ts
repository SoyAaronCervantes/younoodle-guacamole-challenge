import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { csvRoutesNames } from './request.routes';
@Injectable({
  providedIn: 'root'
})
export class RequestDataService {

  constructor(

    private httpClient: HttpClient

  ) { }

  get investors(): Observable<string> {

    // @ts-ignore
    return this.httpClient.get<string>( csvRoutesNames.files + '/investors.csv', { responseType: 'text' });

  }

  get startups(): Observable<string> {

    // @ts-ignore
    return this.httpClient.get<string>( csvRoutesNames.files + '/startups.csv', { responseType: 'text' });

  }

}

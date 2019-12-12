import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {csvRoutesNames} from '../request/request.routes';
import {RequestDataService} from '../request/request-data.service';
import {map} from 'rxjs/operators';
import {DataClass} from '../../../model/data/data.class';
import {InvestorClass} from '../../../model/investor/investor.class';

@Injectable({
  providedIn: 'root'
})
export class ProcessDataRequestService {

  constructor(
    private requestDataService: RequestDataService
  ) { }

  get investors(): Observable<InvestorClass[]> {
    return this.requestDataService.investors.pipe(
      map( res => {
        return this.parseToJSON( res );
      })
    );
  }

  get startup(): Observable<DataClass[]> {
    return this.requestDataService.startup.pipe(
      map( res => {
        return this.parseToJSON( res );
      })
    );
  }

  parseToJSON( csv: string ): any[] {

    const temp = 'name,industry\n' + csv;

    const lines = temp.split('\n');

    const result = [];

    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {

      const obj = {};

      const currentLine = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {

        obj[headers[j]] = currentLine[j];

      }

      result.push(obj);

    }

    result.pop();

    return result;

  }

}

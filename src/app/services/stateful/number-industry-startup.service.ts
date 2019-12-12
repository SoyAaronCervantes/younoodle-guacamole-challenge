import { Injectable } from '@angular/core';
import {IndustryStartupsInterface} from '../../interfaces/industry-startups.interface';

@Injectable({
  providedIn: 'root'
})
export class NumberIndustryStartupService {

  private numberObject: IndustryStartupsInterface<number>;

  constructor() { }

  set object(data: IndustryStartupsInterface<number>) {
    this.numberObject = data;
  }

  get object(): IndustryStartupsInterface<number> {
    return this.numberObject;
  }

}

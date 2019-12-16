import { Injectable } from '@angular/core';
import {InvestorClass} from '../../model/investor/investor.class';
import {DataClass} from '../../model/data/data.class';
import {IndustryStartupsInterface} from '../../interfaces/industry-startups.interface';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  constructor() { }

  splitIndustry( investors: DataClass[], startups: DataClass[] ): IndustryStartupsInterface<DataClass[]> {

    const aux: IndustryStartupsInterface<DataClass[]> = {};

    for ( const investor of investors ) {

      if ( investor.industry !== 'any' ) {

        aux[ investor.industry ] = [...startups.filter( startup => startup.industry === investor.industry )];

      }

    }

    return aux;

  }

}

import { Injectable } from '@angular/core';
import {InvestorClass} from '../../model/investor/investor.class';
import {DataClass} from '../../model/data/data.class';
import {IndustryStartupsInterface} from '../../interfaces/industry-startups.interface';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  constructor() { }

  splitIndustry( investors: InvestorClass[], startups: DataClass[] ): IndustryStartupsInterface<DataClass[]> {

    const aux: IndustryStartupsInterface<DataClass[]> = {};

    for ( const investor of investors ) {

      aux[ investor.industry ] = ( investor.industry !== 'any' ) ?

        [...startups.filter( startup => startup.industry === investor.industry )] :

        [...startups];

    }

    return aux;

  }

}

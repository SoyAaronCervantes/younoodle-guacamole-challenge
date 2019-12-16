import { Injectable } from '@angular/core';
import {InvestorClass} from '../../model/investor/investor.class';
import {IndustryStartupsInterface} from '../../interfaces/industry-startups.interface';
import {DataClass} from '../../model/data/data.class';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  constructor() { }

  fillStartupForInvestors( investors: InvestorClass[], industries: IndustryStartupsInterface<DataClass[]> ): InvestorClass[] {

    let auxInvestors: InvestorClass[];

    investors.map(investor => {

      if (investor.industry !== 'any') {

        investor.startups = industries[investor.industry].splice(0, 10);

      }

      return investor;

    });

    let test = [];

    for (const key in industries) {

      if (industries.hasOwnProperty(key)) {

        const element = industries[key];

        test = [...test, ...element];

      }

    }

    auxInvestors = investors.map( investor => {

      if ( investor.industry === 'any' ) { investor.startups = test.splice(0, 10); }

      return investor;

    });

    console.log( auxInvestors );

    return auxInvestors;

  }

}

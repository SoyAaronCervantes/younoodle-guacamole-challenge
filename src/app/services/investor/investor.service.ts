import { Injectable } from '@angular/core';
import {InvestorClass} from '../../model/investor/investor.class';
import {IndustryStartupsInterface} from '../../interfaces/industry-startups.interface';
import {DataClass} from '../../model/data/data.class';
import {NumberIndustryStartupService} from '../stateful/number-industry-startup.service';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  constructor(
    private numberIndustryStartupService: NumberIndustryStartupService
  ) { }

  fillStartupForInvestors( investors: InvestorClass[], industries: IndustryStartupsInterface<DataClass[]> ): InvestorClass[] {

    return investors.map( investor => {

      investor.startups = [

        ...industries[investor.industry]

          .slice(

            this.numberIndustryStartupService.object[investor.industry],

            this.numberIndustryStartupService.object[investor.industry] + 10

          )

      ];

      this.numberIndustryStartupService.object[investor.industry] += investor.startups.length;

      return investor;

    });

  }

}

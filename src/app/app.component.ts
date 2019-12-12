import {Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

import {ProcessDataRequestService} from './services/data/process/process-data-request.service';

import {InvestorClass} from './model/investor/investor.class';
import {DataClass} from './model/data/data.class';

import {IndustryStartupsInterface} from './interfaces/industry-startups.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'good-match';
  investor$: Observable<InvestorClass[]>;
  private readonly numberIndustryStartup: IndustryStartupsInterface<number>;

  constructor(
    private processDataRequestService: ProcessDataRequestService
  ) {
    this.getInvestorData();
    this.numberIndustryStartup = {};
  }

  ngOnInit(): void {}

  getInvestorData() {

    const splitIndustry = ( investors: InvestorClass[], startups: DataClass[] ): IndustryStartupsInterface<DataClass[]> => {

      const aux: IndustryStartupsInterface<DataClass[]> = {};

      for ( const investor of investors ) {

        aux[ investor.industry ] = ( investor.industry !== 'any' ) ?

          [...startups.filter( startup => startup.industry === investor.industry )] :

          [...startups];

      }

      return aux;

    };

    const fillStartupForInvestors = ( investors: InvestorClass[], industries: IndustryStartupsInterface<DataClass[]> ): InvestorClass[] => {

      return investors.map( investor => {

        investor.startups = [

          ...industries[investor.industry]

            .slice(

              this.numberIndustryStartup[investor.industry],

              this.numberIndustryStartup[investor.industry] + 10

            )

        ];

        this.numberIndustryStartup[investor.industry] += investor.startups.length;

        return investor;

      });

    };

    this.investor$ = this.processDataRequestService.startup

      .pipe(

        map( startups => {

          startups.forEach( value => {

            this.numberIndustryStartup[value.industry] = 0;

            this.numberIndustryStartup.any = 0;

          });

          return startups;

        }),

        mergeMap(

          startups => this.processDataRequestService.investors

            .pipe(

              map( investors => {

                const industries = splitIndustry( investors, startups );

                return fillStartupForInvestors( investors, industries );

              }),
            )
        )

      );

  }

}

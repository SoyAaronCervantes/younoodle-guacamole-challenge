import {Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

import {ProcessDataRequestService} from './services/data/process/process-data-request.service';

import {InvestorClass} from './model/investor/investor.class';
import {IndustryService} from './services/industry/industry.service';
import {InvestorService} from './services/investor/investor.service';
import {NumberIndustryStartupService} from './services/stateful/number-industry-startup.service';
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
    private processDataRequestService: ProcessDataRequestService,
    private industryService: IndustryService,
    private investorService: InvestorService,
    private numberIndustryStartupService: NumberIndustryStartupService
  ) {
    this.getInvestorData();
    this.numberIndustryStartup = {};
  }

  ngOnInit(): void {}

  getInvestorData() {

    this.investor$ = this.processDataRequestService.startup

      .pipe(

        map( startups => {

          startups.forEach( value => {

            this.numberIndustryStartup[value.industry] = 0;

            this.numberIndustryStartup.any = 0;

          });

          this.numberIndustryStartupService.object = this.numberIndustryStartup;

          return startups;

        }),

        mergeMap(

          startups => this.processDataRequestService.investors

            .pipe(

              map( investors => {

                const industries = this.industryService.splitIndustry( investors, startups );

                return this.investorService.fillStartupForInvestors( investors, industries );

              }),
            )
        )

      );

  }



}

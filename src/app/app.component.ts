import {Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

import {ProcessDataRequestService} from './services/data/process/process-data-request.service';

import {InvestorClass} from './model/investor/investor.class';
import {InvestorService} from './services/investor/investor.service';
import {IndustryStartupsInterface} from './interfaces/industry-startups.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'good-match';
  investors$: Observable<InvestorClass[]>;
  private readonly numberIndustryStartup: IndustryStartupsInterface<number>;

  constructor(
    private processDataRequestService: ProcessDataRequestService,
    private investorService: InvestorService,
  ) {
    this.getInvestorData();
    this.numberIndustryStartup = {};
  }

  ngOnInit(): void {}

  getInvestorData() {

    this.investors$ = this.processDataRequestService.startups

      .pipe(

        map( startups =>
          startups.sort( (a, b) => ( a.industry > b.industry ) ? 1 : ( a.industry < b.industry ) ? -1 : 0 )
        ),

        mergeMap(

          startups => this.processDataRequestService.investors

            .pipe(

              map( investors => {

                return this.investorService.fillStartupForInvestors( investors, startups );

              }),
            )
        )

      );

  }



}

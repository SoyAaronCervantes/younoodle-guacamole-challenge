import { Injectable } from '@angular/core';
import {InvestorClass} from '../../model/investor/investor.class';
import {DataClass} from '../../model/data/data.class';
import {isUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  constructor() { }

  fillStartupForInvestors( investors: InvestorClass[], startups: DataClass[] ): InvestorClass[] {

    for ( const investor of investors ) {

      if ( isUndefined( investor.startups ) ) { investor.startups = []; }

      for ( const startup of startups ) {

        if ( investor.industry === startup.industry && investor.startups.length < 10 ) {

          investor.startups = startups.splice( startups.indexOf( startup ), 10);

        }

      }

    }

    for ( const investor of investors ) {

      if ( investor.startups.length < 10  ) {

        investor.startups = startups.splice( 0, 10);

      }

    }

    return investors;

  }

}

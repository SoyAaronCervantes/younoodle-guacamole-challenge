import {Component, Input, OnInit} from '@angular/core';
import {InvestorClass} from '../../model/investor/investor.class';

@Component({
  selector: 'app-list-startup',
  templateUrl: './list-startup.component.html',
  styleUrls: ['./list-startup.component.css']
})
export class ListStartupComponent implements OnInit {

  @Input() investor: InvestorClass;

  constructor() { }

  ngOnInit() {
  }

}

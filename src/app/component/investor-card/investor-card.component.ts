import {Component, Input, OnInit} from '@angular/core';
import {DataClass} from '../../model/data/data.class';

@Component({
  selector: 'app-investor-card',
  templateUrl: './investor-card.component.html',
  styleUrls: ['./investor-card.component.css']
})
export class InvestorCardComponent implements OnInit {

  @Input() investor: DataClass;

  constructor() { }

  ngOnInit() {
  }

}

import {DataClass} from '../data/data.class';

export class InvestorClass extends DataClass {

  startups: DataClass[];

  constructor(
    name: string,
    industry: string,
    startups: DataClass[],
  ) {

    super(name, industry);

    this.startups = startups;

  }

}

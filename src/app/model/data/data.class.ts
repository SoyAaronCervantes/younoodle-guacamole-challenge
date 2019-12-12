import {DataInterface} from '../../interfaces/data.interface';

export class DataClass implements DataInterface {

  readonly name: string;
  readonly industry: string;

  constructor(
    name: string,
    industry: string
  ) {
    this.name = name;
    this.industry = industry;
  }

}

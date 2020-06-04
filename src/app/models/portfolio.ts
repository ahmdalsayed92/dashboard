export class Portfolio {
  Name: string;
  Status: string;
  Description: string;
  Budget: string;
  Consumed: string;
  Programs: string;
  Projects: string;

  constructor(opt?: Partial<Portfolio>) {
    Object.assign(this, opt);
  }
}

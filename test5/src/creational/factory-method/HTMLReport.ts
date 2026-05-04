import { IReport } from './IReport';

export class HTMLReport implements IReport {
  constructor(private readonly data: string) {}

  generate(): string {
    return `[HTML] <html><body><h1>Report</h1><p>${this.data}</p></body></html>`;
  }

  getTitle(): string {
    return 'HTML Report';
  }
}

import { IReport } from './IReport';

export class CSVReport implements IReport {
  constructor(private readonly data: string) {}

  generate(): string {
    return `[CSV] title,content\nreport,"${this.data}"`;
  }

  getTitle(): string {
    return 'CSV Report';
  }
}

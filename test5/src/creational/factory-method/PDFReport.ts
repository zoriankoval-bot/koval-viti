import { IReport } from './IReport';

export class PDFReport implements IReport {
  constructor(private readonly data: string) {}

  generate(): string {
    return `[PDF] ---- Report ----\n${this.data}\n--------------------`;
  }

  getTitle(): string {
    return 'PDF Report';
  }
}

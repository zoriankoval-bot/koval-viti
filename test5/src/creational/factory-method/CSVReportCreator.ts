import { ReportCreator } from './ReportCreator';
import { CSVReport } from './CSVReport';
import { IReport } from './IReport';

export class CSVReportCreator extends ReportCreator {
  createReport(data: string): IReport {
    return new CSVReport(data);
  }
}

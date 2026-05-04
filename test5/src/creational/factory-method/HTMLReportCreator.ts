import { ReportCreator } from './ReportCreator';
import { HTMLReport } from './HTMLReport';
import { IReport } from './IReport';

export class HTMLReportCreator extends ReportCreator {
  createReport(data: string): IReport {
    return new HTMLReport(data);
  }
}

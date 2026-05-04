import { ReportCreator } from './ReportCreator';
import { PDFReport } from './PDFReport';
import { IReport } from './IReport';

export class PDFReportCreator extends ReportCreator {
  createReport(data: string): IReport {
    return new PDFReport(data);
  }
}

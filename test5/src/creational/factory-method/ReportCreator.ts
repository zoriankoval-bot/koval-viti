import { IReport } from './IReport';

export abstract class ReportCreator {
  // Factory Method — підкласи визначають який продукт створювати
  abstract createReport(data: string): IReport;

  // Бізнес-логіка, яка використовує factory method
  export(data: string): void {
    const report = this.createReport(data);
    console.log(`Exporting: ${report.getTitle()}`);
    console.log(report.generate());
  }
}

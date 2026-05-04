import { ReportCreator, PDFReportCreator, HTMLReportCreator, CSVReportCreator } from '../src/creational/factory-method';

const salesData = 'Sales Q1: 120 units, Q2: 240 units, Q3: 180 units';

// Приклад 1: Кожен Creator створює свій тип продукту
console.log('=== Приклад 1: Різні формати звіту ===');
const pdfCreator = new PDFReportCreator();
const htmlCreator = new HTMLReportCreator();
const csvCreator = new CSVReportCreator();

pdfCreator.export(salesData);
console.log('');
htmlCreator.export(salesData);
console.log('');
csvCreator.export(salesData);

console.log('');

// Приклад 2: Клієнтський код працює з абстрактним Creator — не знає про конкретні класи
console.log('=== Приклад 2: Поліморфне використання ===');
function exportReport(creator: ReportCreator, data: string): void {
  creator.export(data);
}

const creators: ReportCreator[] = [
  new PDFReportCreator(),
  new HTMLReportCreator(),
  new CSVReportCreator(),
];

const reportData = 'Quarterly financial summary';
for (const creator of creators) {
  exportReport(creator, reportData);
  console.log('');
}

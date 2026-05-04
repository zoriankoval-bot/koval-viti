# Тест 5 — Factory Method Pattern (Породжуючий патерн)

Реалізація породжуючого патерну **Factory Method** на TypeScript.

## Відмінність від Factory (Test 4)

| Factory | Factory Method |
|---|---|
| Один клас зі статичним методом | Абстрактний Creator-клас з абстрактним методом |
| Вибір продукту через параметр | Вибір продукту через підклас Creator |
| Клієнт викликає фабрику напряму | Клієнт працює з абстрактним Creator |

## Що таке Factory Method

Визначає абстрактний метод `createProduct()` у базовому класі.
Кожен конкретний підклас Creator перевизначає цей метод і вирішує,
який саме продукт створювати. Базовий клас містить бізнес-логіку,
яка використовує продукт, але не знає його конкретного типу.

## Структура

```
src/creational/factory-method/
├── IReport.ts             ← інтерфейс продукту
├── PDFReport.ts           ← конкретний продукт
├── HTMLReport.ts          ← конкретний продукт
├── CSVReport.ts           ← конкретний продукт
├── ReportCreator.ts       ← абстрактний Creator (factory method тут)
├── PDFReportCreator.ts    ← конкретний Creator
├── HTMLReportCreator.ts   ← конкретний Creator
├── CSVReportCreator.ts    ← конкретний Creator
└── index.ts               ← експорти

examples/
└── index.ts               ← приклади використання
```

## UML-схема

```
      «abstract»
    ReportCreator
    +createReport(data): IReport  ← Factory Method
    +export(data): void           ← використовує createReport()
           ▲
   ________|________
   |        |       |
PDFCreator HTMLCreator CSVCreator

     «interface»
       IReport
   +generate(): string
   +getTitle(): string
         ▲
   ______|______
   |      |     |
  PDF   HTML   CSV
```

## Як запустити

### Встановити залежності
```bash
npm install
```

### Запустити приклади
```bash
npm run example
```

### Очікуваний вивід
```
=== Приклад 1: Різні формати звіту ===
Exporting: PDF Report
[PDF] ---- Report ----
Sales Q1: 120 units, Q2: 240 units, Q3: 180 units
--------------------

Exporting: HTML Report
[HTML] <html><body><h1>Report</h1><p>Sales Q1: ...</p></body></html>

Exporting: CSV Report
[CSV] title,content
report,"Sales Q1: ..."
```

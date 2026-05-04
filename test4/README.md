# Тест 4 — Factory Pattern (Породжуючий патерн)

Реалізація породжуючого патерну **Factory** на TypeScript.

## Що таке Factory Pattern

Factory (Фабрика) — це породжуючий патерн, який надає інтерфейс для створення об'єктів,
дозволяючи підкласам або фабричному методу вирішувати, який клас інстанціювати.

Клієнтський код працює тільки з інтерфейсом і не залежить від конкретних класів продуктів.

## Структура

```
src/creational/factory/
├── INotification.ts       ← інтерфейс продукту
├── EmailNotification.ts   ← конкретний продукт
├── SMSNotification.ts     ← конкретний продукт
├── PushNotification.ts    ← конкретний продукт
├── NotificationFactory.ts ← фабрика
└── index.ts               ← експорти

examples/
└── index.ts               ← приклади використання
```

## UML-схема

```
         «interface»
        INotification
        +send(msg): void
        +getType(): string
              ▲
    __________|__________
    |          |         |
EmailNotif. SMSNotif. PushNotif.

NotificationFactory
+create(type, target): INotification
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
[Email] To: user@example.com | Message: Ваш замовлення підтверджено!
[SMS] To: +380991234567 | Message: Код підтвердження: 4821
[Push] Device: device-token-abc123 | Message: У вас нове повідомлення
---
Тип: Email
[Email] To: admin@example.com | Message: Сервер запущено
Тип: SMS
[SMS] To: +380501112233 | Message: Нова транзакція
Тип: Push
[Push] Device: token-xyz-987 | Message: Акція закінчується!
```

## Збірка в JavaScript
```bash
npm run build
```

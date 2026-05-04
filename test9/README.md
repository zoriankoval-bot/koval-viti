# Тест 9 — Facade Pattern (Структурний патерн)

Реалізація структурного патерну **Facade** на TypeScript.

## Що таке Facade Pattern

Facade (Фасад) — структурний патерн, який надає спрощений інтерфейс
до складної підсистеми з багатьох класів. Клієнт взаємодіє тільки
з фасадом, не знаючи про внутрішні деталі підсистеми.

## Структура

```
src/structural/facade/
├── InventoryService.ts    ← підсистема: перевірка складу
├── PaymentService.ts      ← підсистема: обробка оплати
├── ShippingService.ts     ← підсистема: створення доставки
├── NotificationService.ts ← підсистема: відправка сповіщень
├── OrderFacade.ts         ← Facade (координує всі підсистеми)
└── index.ts               ← експорти

examples/
└── index.ts               ← приклади використання
```

## UML-схема

```
         Client
           |
           | uses only
           ▼
       OrderFacade
     +placeOrder()
     +cancelOrder()
      /   |   |   \
     ▼    ▼   ▼    ▼
Inventory Payment Shipping Notification
Service   Service  Service   Service
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
=== Приклад 1: Успішне замовлення ===
Placing order: 1x laptop for customer customer_001
  [Inventory] laptop: 5 in stock
  [Payment] Charging $1299.99 to customer customer_001
  [Inventory] Reserved 1x laptop
  [Shipping] Shipment created for 1x laptop to "Kyiv, Khreshchatyk 1"
  [Notification] → Customer customer_001: "Order confirmed! Tracking: TRACK-..."
Order placed successfully!

=== Приклад 2: Товар відсутній ===
  [Inventory] tablet: 0 in stock
  [Notification] → Customer customer_002: "Sorry, tablet is out of stock"
```

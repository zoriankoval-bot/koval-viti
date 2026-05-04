# Тест 8 — Adapter Pattern (Структурний патерн)

Реалізація структурного патерну **Adapter** на TypeScript.

## Що таке Adapter Pattern

Adapter (Адаптер) — структурний патерн, який дозволяє об'єктам з несумісними
інтерфейсами працювати разом. Адаптер обгортає існуючий клас і перетворює
його інтерфейс у той, що очікує клієнт.

## Проблема

`StripeAPI` та `PayPalAPI` мають різні методи та сигнатури.
Клієнтський код не може використовувати їх напряму через єдиний інтерфейс.

## Рішення

Адаптери `StripeAdapter` та `PayPalAdapter` реалізують `IPaymentGateway`
і всередині делегують виклики відповідному зовнішньому API.

## Структура

```
src/structural/adapter/
├── IPaymentGateway.ts   ← Target (інтерфейс, який очікує клієнт)
├── StripeAPI.ts         ← Adaptee (несумісний зовнішній клас)
├── PayPalAPI.ts         ← Adaptee (несумісний зовнішній клас)
├── StripeAdapter.ts     ← Adapter (обгортає StripeAPI)
├── PayPalAdapter.ts     ← Adapter (обгортає PayPalAPI)
└── index.ts             ← експорти

examples/
└── index.ts             ← приклади використання
```

## UML-схема

```
      «interface»
   IPaymentGateway              StripeAPI
+charge(amount, currency)       +createCharge(cents, curr)
         ▲                              ▲
         |                             wraps
   StripeAdapter ─────────────────────►|
   PayPalAdapter ──────────►  PayPalAPI
                              +sendPayment(amount, currencyCode, note)
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
=== Приклад 1: Оплата через Stripe ===
[Stripe] createCharge(9999 cents, USD)
  => Transaction ID: stripe_...

=== Приклад 2: Оплата через PayPal ===
[PayPal] sendPayment(49.5, EUR, "Online payment")
  => Transaction ID: paypal_...

=== Приклад 3: Кілька шлюзів через єдиний інтерфейс ===
Gateway #1:
[Stripe] createCharge(2500 cents, USD)
  => Transaction ID: stripe_...
Gateway #2:
[PayPal] sendPayment(25, USD, "Online payment")
  => Transaction ID: paypal_...
```

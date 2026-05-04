import { IPaymentGateway, StripeAdapter, PayPalAdapter } from '../src/structural/adapter';

// Клієнтська функція — працює тільки з IPaymentGateway, не знає про Stripe чи PayPal
function processOrder(gateway: IPaymentGateway, amount: number, currency: string): void {
  const transactionId = gateway.charge(amount, currency);
  console.log(`  => Transaction ID: ${transactionId}`);
}

// Приклад 1: Stripe через адаптер
console.log('=== Приклад 1: Оплата через Stripe ===');
const stripe = new StripeAdapter();
processOrder(stripe, 99.99, 'USD');

console.log('');

// Приклад 2: PayPal через адаптер
console.log('=== Приклад 2: Оплата через PayPal ===');
const paypal = new PayPalAdapter();
processOrder(paypal, 49.50, 'EUR');

console.log('');

// Приклад 3: Список шлюзів — клієнт не змінюється при додаванні нового шлюзу
console.log('=== Приклад 3: Кілька шлюзів через єдиний інтерфейс ===');
const gateways: IPaymentGateway[] = [
  new StripeAdapter(),
  new PayPalAdapter(),
];

gateways.forEach((gateway, i) => {
  console.log(`Gateway #${i + 1}:`);
  processOrder(gateway, 25.00, 'USD');
});

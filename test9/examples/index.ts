import { OrderFacade } from '../src/structural/facade';

const facade = new OrderFacade();

// Приклад 1: Успішне замовлення
console.log('=== Приклад 1: Успішне замовлення ===');
facade.placeOrder({
  customerId: 'customer_001',
  item: 'laptop',
  quantity: 1,
  amount: 1299.99,
  address: 'Kyiv, Khreshchatyk 1',
});

// Приклад 2: Товар відсутній на складі
console.log('=== Приклад 2: Товар відсутній ===');
facade.placeOrder({
  customerId: 'customer_002',
  item: 'tablet',
  quantity: 1,
  amount: 499.99,
  address: 'Lviv, Rynok Square 5',
});

// Приклад 3: Скасування замовлення
console.log('=== Приклад 3: Скасування замовлення ===');
facade.cancelOrder('customer_001', 1299.99);

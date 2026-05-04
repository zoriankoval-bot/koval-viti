import { NotificationFactory, NotificationType } from '../src/creational/factory';

// Приклад 1: Створення конкретних типів через фабрику
const email = NotificationFactory.create('email', 'user@example.com');
const sms = NotificationFactory.create('sms', '+380991234567');
const push = NotificationFactory.create('push', 'device-token-abc123');

email.send('Ваш замовлення підтверджено!');
sms.send('Код підтвердження: 4821');
push.send('У вас нове повідомлення');

console.log('---');

// Приклад 2: Динамічний вибір типу (клієнтський код не залежить від конкретних класів)
const notifications: Array<{ type: NotificationType; target: string; message: string }> = [
  { type: 'email', target: 'admin@example.com', message: 'Сервер запущено' },
  { type: 'sms',   target: '+380501112233',      message: 'Нова транзакція' },
  { type: 'push',  target: 'token-xyz-987',       message: 'Акція закінчується!' },
];

for (const item of notifications) {
  const notification = NotificationFactory.create(item.type, item.target);
  console.log(`Тип: ${notification.getType()}`);
  notification.send(item.message);
}

import { AppConfig, Logger } from '../src/creational/singleton';

// Приклад 1: AppConfig — одна копія на весь застосунок
console.log('=== Приклад 1: AppConfig Singleton ===');

const config1 = AppConfig.getInstance();
const config2 = AppConfig.getInstance();

console.log('config1 === config2:', config1 === config2); // true

console.log('Initial settings:', config1.getAll());

// Зміна через config1 видна через config2 — це один і той самий об'єкт
config1.set('env', 'production');
console.log('config2.get("env"):', config2.get('env')); // production

console.log('');

// Приклад 2: Logger — один журнал для всього застосунку
console.log('=== Приклад 2: Logger Singleton ===');

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

console.log('logger1 === logger2:', logger1 === logger2); // true

logger1.log('INFO', 'Застосунок запущено');
logger2.log('WARN', 'Використання пам\'яті перевищує 80%');
logger1.log('ERROR', 'З\'єднання з базою даних втрачено');

console.log('');
console.log('Всі логи (зібрані через logger2):');
logger2.getLogs().forEach(entry => console.log(' ', entry));

console.log('');
console.log(`Всього записів: ${logger2.getLogs().length}`);

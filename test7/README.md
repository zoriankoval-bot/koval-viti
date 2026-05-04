# Тест 7 — Singleton Pattern (Породжуючий патерн)

Реалізація породжуючого патерну **Singleton** на TypeScript.

## Що таке Singleton Pattern

Singleton гарантує, що клас має лише один екземпляр,
та надає глобальну точку доступу до нього.

Ключові ознаки:
- Приватний конструктор (`private constructor`)
- Статичне поле для зберігання єдиного екземпляра
- Статичний метод `getInstance()` для доступу до нього

## Структура

```
src/creational/singleton/
├── AppConfig.ts   ← Singleton (конфігурація застосунку)
├── Logger.ts      ← Singleton (журнал подій)
└── index.ts       ← експорти

examples/
└── index.ts       ← приклади використання
```

## UML-схема

```
       AppConfig
  -instance: AppConfig
  -settings: Map
  -constructor()
  +getInstance(): AppConfig   ← єдина точка доступу
  +get(key): string
  +set(key, value): void
  +getAll(): Record

       Logger
  -instance: Logger
  -logs: string[]
  -constructor()
  +getInstance(): Logger
  +log(level, message): void
  +getLogs(): string[]
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
=== Приклад 1: AppConfig Singleton ===
config1 === config2: true
Initial settings: { env: 'development', version: '1.0.0', maxConnections: '10' }
config2.get("env"): production

=== Приклад 2: Logger Singleton ===
logger1 === logger2: true
[...] [INFO] Застосунок запущено
[...] [WARN] Використання пам'яті перевищує 80%
[...] [ERROR] З'єднання з базою даних втрачено

Всього записів: 3
```

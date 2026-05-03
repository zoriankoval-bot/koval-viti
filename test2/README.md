# Тест 2 — RabbitMQ (Event-Driven архітектура)

Демонстрація Event-Driven архітектури за допомогою RabbitMQ з двома
веб-сервісами що обмінюються повідомленнями в реальному часі.

## Архітектура

[Web1 Продюсер] --> [RabbitMQ :5672] --> [Web2 Споживач]
                         |
                  [Management UI :15672]
                  [WebSTOMP :15674]

## Сервіси

| Сервіс            | Порт  | Опис                        |
|-------------------|-------|-----------------------------|
| RabbitMQ Broker   | 5672  | Брокер повідомлень          |
| Management UI     | 15672 | Веб-інтерфейс управління    |
| WebSTOMP          | 15674 | WebSocket для браузерів     |
| Web1 Продюсер     | 3001  | Надсилає повідомлення       |
| Web2 Споживач     | 3002  | Отримує повідомлення        |

## Як запустити

### Запуск
```bash
docker-compose up -d
```

### Відкрити у браузері
- Web1 (Продюсер): http://localhost:3001
- Web2 (Споживач): http://localhost:3002
- RabbitMQ UI: http://localhost:15672 (admin/admin)

### Зупинити
```bash
docker-compose down
```

## Тестування з Postman

POST http://localhost:15672/api/exchanges/%2F/amq.default/publish
Authorization: Basic admin admin
Content-Type: application/json

{
  "properties": {},
  "routing_key": "chat-messages",
  "payload": "Привіт від Postman!",
  "payload_encoding": "string"
}
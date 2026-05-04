# Тест 3 — ActiveMQ (Event-Driven архітектура)

Демонстрація Event-Driven архітектури за допомогою Apache ActiveMQ з двома
веб-сервісами що обмінюються повідомленнями в реальному часі.

## Архітектура

[Web1 Продюсер] --> [ActiveMQ :61616] --> [Web2 Споживач]
                         |
                  [Admin UI :8161]
                  [WebSocket :61614]

## Сервіси

| Сервіс            | Порт  | Опис                        |
|-------------------|-------|-----------------------------|
| ActiveMQ Broker   | 61616 | Брокер повідомлень          |
| Admin UI          | 8161  | Веб-інтерфейс управління    |
| WebSocket STOMP   | 61614 | WebSocket для браузерів     |
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
- ActiveMQ UI: http://localhost:8161 (admin/admin)

### Зупинити
```bash
docker-compose down
```

## Тестування з Postman

POST http://localhost:8161/api/message/chat-messages?type=queue
Authorization: Basic admin admin
Content-Type: text/plain

Привіт від Postman!
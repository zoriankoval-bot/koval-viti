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
<img width="605" height="625" alt="Знімок екрана 2026-05-04 222407" src="https://github.com/user-attachments/assets/cc05b4de-116c-4f2f-9f02-b413fdf08fa6" />

- Web2 (Споживач): http://localhost:3002
<img width="583" height="534" alt="Знімок екрана 2026-05-04 222411" src="https://github.com/user-attachments/assets/02ec027a-0405-459d-a0bf-7b8f1444bc65" />

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
<img width="595" height="592" alt="Знімок екрана 2026-05-04 222719" src="https://github.com/user-attachments/assets/f62f5c4e-482c-4c6a-81cf-01079d7283f7" />

# Тест 1 — Apache Kafka (Event-Driven архітектура)

Демонстрація Event-Driven архітектури за допомогою Apache Kafka з двома
веб-сервісами що обмінюються повідомленнями в реальному часі.

## Архітектура

[Web1 Продюсер] --> [Kafka REST API :8082] --> [Kafka Брокер :9092] --> [Web2 Споживач]
                                                        |
                                                [Zookeeper :2181]

## Сервіси

| Сервіс         | Порт | Опис                      |
|----------------|------|---------------------------|
| Zookeeper      | 2181 | Координація Kafka         |
| Kafka Брокер   | 9092 | Брокер повідомлень        |
| Kafka REST     | 8082 | HTTP API для браузерів    |
| Web1 Продюсер  | 3001 | Надсилає повідомлення     |
| Web2 Споживач  | 3002 | Отримує повідомлення      |

## Як запустити

### Запуск
```bash
docker-compose up -d
```

### Відкрити у браузері
<img width="625" height="785" alt="Знімок екрана 2026-05-03 203835" src="https://github.com/user-attachments/assets/4c3cdcdd-b80e-42ff-bfc4-dc638b4d0c61" />
- Web1 (Продюсер): http://localhost:3001
- Web2 (Споживач): http://localhost:3002

### Зупинити
```bash
docker-compose down
```

## Тестування з Postman

POST http://localhost:8082/topics/chat-messages
Content-Type: application/vnd.kafka.json.v2+json

{
  "records": [
    {
      "key": "postman",
      "value": "Привіт від Postman!"
    }
  ]
}
<img width="605" height="664" alt="Знімок екрана 2026-05-03 191243" src="https://github.com/user-attachments/assets/841604f1-27c5-4352-bb24-8959fed572c3" />

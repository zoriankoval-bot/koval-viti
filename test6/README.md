# Тест 6 — Builder Pattern (Породжуючий патерн)

Реалізація породжуючого патерну **Builder** на TypeScript.

## Що таке Builder Pattern

Builder — патерн, який розділяє конструювання складного об'єкта від його представлення.
Дозволяє створювати різні конфігурації одного продукту крок за кроком.

Ключова відмінність від інших породжуючих патернів:
- **Factory / Factory Method** — створює об'єкт за один виклик
- **Builder** — будує об'єкт покроково, підтримує method chaining та Director

## Структура

```
src/creational/builder/
├── Computer.ts               ← Product (складний об'єкт)
├── IComputerBuilder.ts       ← Builder інтерфейс
├── GamingComputerBuilder.ts  ← Concrete Builder
├── OfficeComputerBuilder.ts  ← Concrete Builder
├── Director.ts               ← Director (керує процесом побудови)
└── index.ts                  ← експорти

examples/
└── index.ts                  ← приклади використання
```

## UML-схема

```
    Director
    +buildGamingPC(builder)
    +buildOfficePC(builder)
    +buildServer(builder)
          |
          | uses
          ▼
   «interface»
  IComputerBuilder
  +setCPU(): this
  +setRAM(): this
  +setStorage(): this
  +setGPU(): this
  +setOS(): this
  +build(): Computer
          ▲
    ______|______
    |            |
GamingBuilder  OfficeBuilder
                        |
                        | creates
                        ▼
                    Computer (Product)
                    +cpu, ram, storage, gpu, os
                    +describe(): void
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
=== Приклад 1: Director будує Gaming PC ===
Computer configuration:
  CPU:     Intel Core i9-14900K
  RAM:     64GB DDR5
  Storage: 2TB NVMe SSD
  GPU:     NVIDIA RTX 4090
  OS:      Windows 11

=== Приклад 2: Director будує Office PC ===
Computer configuration:
  CPU:     Intel Core i5-13400
  RAM:     16GB DDR4
  Storage: 512GB SSD
  GPU:     Integrated
  OS:      Windows 11
...
```

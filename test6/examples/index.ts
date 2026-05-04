import { Director, GamingComputerBuilder, OfficeComputerBuilder } from '../src/creational/builder';

const director = new Director();

// Приклад 1: Director керує побудовою через builder
console.log('=== Приклад 1: Director будує Gaming PC ===');
const gamingPC = director.buildGamingPC(new GamingComputerBuilder());
gamingPC.describe();

console.log('');
console.log('=== Приклад 2: Director будує Office PC ===');
const officePC = director.buildOfficePC(new OfficeComputerBuilder());
officePC.describe();

console.log('');
console.log('=== Приклад 3: Director будує Server ===');
const server = director.buildServer(new GamingComputerBuilder());
server.describe();

console.log('');

// Приклад 4: Без Director — ручне конфігурування через chaining
console.log('=== Приклад 4: Власна конфігурація без Director ===');
const customPC = new GamingComputerBuilder()
  .setCPU('AMD Ryzen 7 7700X')
  .setRAM('32GB DDR5')
  .setStorage('1TB NVMe SSD')
  .setGPU('AMD RX 7900 XTX')
  .setOS('Linux Mint')
  .build();
customPC.describe();

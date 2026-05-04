import { IComputerBuilder } from './IComputerBuilder';
import { Computer } from './Computer';

export class OfficeComputerBuilder implements IComputerBuilder {
  private computer: Computer = new Computer();

  setCPU(cpu: string): this {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string): this {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): this {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string): this {
    this.computer.gpu = gpu;
    return this;
  }

  setOS(os: string): this {
    this.computer.os = os;
    return this;
  }

  build(): Computer {
    const result = this.computer;
    this.computer = new Computer();
    return result;
  }
}

import { Computer } from './Computer';

export interface IComputerBuilder {
  setCPU(cpu: string): this;
  setRAM(ram: string): this;
  setStorage(storage: string): this;
  setGPU(gpu: string): this;
  setOS(os: string): this;
  build(): Computer;
}

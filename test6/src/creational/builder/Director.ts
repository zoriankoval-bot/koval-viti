import { IComputerBuilder } from './IComputerBuilder';
import { Computer } from './Computer';

export class Director {
  buildGamingPC(builder: IComputerBuilder): Computer {
    return builder
      .setCPU('Intel Core i9-14900K')
      .setRAM('64GB DDR5')
      .setStorage('2TB NVMe SSD')
      .setGPU('NVIDIA RTX 4090')
      .setOS('Windows 11')
      .build();
  }

  buildOfficePC(builder: IComputerBuilder): Computer {
    return builder
      .setCPU('Intel Core i5-13400')
      .setRAM('16GB DDR4')
      .setStorage('512GB SSD')
      .setOS('Windows 11')
      .build();
  }

  buildServer(builder: IComputerBuilder): Computer {
    return builder
      .setCPU('AMD EPYC 9654')
      .setRAM('256GB ECC DDR5')
      .setStorage('4x 4TB NVMe RAID')
      .setOS('Ubuntu Server 24.04')
      .build();
  }
}

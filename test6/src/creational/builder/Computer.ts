export class Computer {
  cpu: string = '';
  ram: string = '';
  storage: string = '';
  gpu: string = '';
  os: string = '';

  describe(): void {
    console.log('Computer configuration:');
    console.log(`  CPU:     ${this.cpu}`);
    console.log(`  RAM:     ${this.ram}`);
    console.log(`  Storage: ${this.storage}`);
    console.log(`  GPU:     ${this.gpu || 'Integrated'}`);
    console.log(`  OS:      ${this.os || 'None'}`);
  }
}

import { INotification } from './INotification';

export class SMSNotification implements INotification {
  constructor(private readonly phoneNumber: string) {}

  send(message: string): void {
    console.log(`[SMS] To: ${this.phoneNumber} | Message: ${message}`);
  }

  getType(): string {
    return 'SMS';
  }
}

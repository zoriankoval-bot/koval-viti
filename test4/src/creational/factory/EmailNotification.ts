import { INotification } from './INotification';

export class EmailNotification implements INotification {
  constructor(private readonly recipient: string) {}

  send(message: string): void {
    console.log(`[Email] To: ${this.recipient} | Message: ${message}`);
  }

  getType(): string {
    return 'Email';
  }
}

import { INotification } from './INotification';

export class PushNotification implements INotification {
  constructor(private readonly deviceToken: string) {}

  send(message: string): void {
    console.log(`[Push] Device: ${this.deviceToken} | Message: ${message}`);
  }

  getType(): string {
    return 'Push';
  }
}

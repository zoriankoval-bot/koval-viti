import { INotification } from './INotification';
import { EmailNotification } from './EmailNotification';
import { SMSNotification } from './SMSNotification';
import { PushNotification } from './PushNotification';

export type NotificationType = 'email' | 'sms' | 'push';

export class NotificationFactory {
  static create(type: NotificationType, target: string): INotification {
    switch (type) {
      case 'email':
        return new EmailNotification(target);
      case 'sms':
        return new SMSNotification(target);
      case 'push':
        return new PushNotification(target);
      default:
        throw new Error(`Unknown notification type: ${type}`);
    }
  }
}

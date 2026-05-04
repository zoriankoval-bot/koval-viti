export class NotificationService {
  send(customerId: string, message: string): void {
    console.log(`  [Notification] → Customer ${customerId}: "${message}"`);
  }
}

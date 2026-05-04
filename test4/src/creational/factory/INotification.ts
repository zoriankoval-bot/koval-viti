export interface INotification {
  send(message: string): void;
  getType(): string;
}

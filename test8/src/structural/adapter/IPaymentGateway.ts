export interface IPaymentGateway {
  charge(amount: number, currency: string): string;
}

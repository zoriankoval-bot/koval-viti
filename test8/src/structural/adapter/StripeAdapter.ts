import { IPaymentGateway } from './IPaymentGateway';
import { StripeAPI } from './StripeAPI';

export class StripeAdapter implements IPaymentGateway {
  private stripe = new StripeAPI();

  charge(amount: number, currency: string): string {
    const cents = Math.round(amount * 100);
    const result = this.stripe.createCharge(cents, currency);
    return result.id;
  }
}

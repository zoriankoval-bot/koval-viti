import { IPaymentGateway } from './IPaymentGateway';
import { PayPalAPI } from './PayPalAPI';

export class PayPalAdapter implements IPaymentGateway {
  private paypal = new PayPalAPI();

  charge(amount: number, currency: string): string {
    return this.paypal.sendPayment(amount, currency, 'Online payment');
  }
}

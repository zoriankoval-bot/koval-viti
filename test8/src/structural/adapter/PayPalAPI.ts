export class PayPalAPI {
  sendPayment(amount: number, currencyCode: string, note: string): string {
    const transactionId = `paypal_${Date.now()}`;
    console.log(`[PayPal] sendPayment(${amount}, ${currencyCode}, "${note}")`);
    return transactionId;
  }
}

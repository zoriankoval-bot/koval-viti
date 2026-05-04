export class StripeAPI {
  createCharge(cents: number, curr: string): { id: string; status: string } {
    const id = `stripe_${Date.now()}`;
    console.log(`[Stripe] createCharge(${cents} cents, ${curr})`);
    return { id, status: 'succeeded' };
  }
}

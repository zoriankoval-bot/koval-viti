export class PaymentService {
  charge(customerId: string, amount: number): boolean {
    console.log(`  [Payment] Charging $${amount.toFixed(2)} to customer ${customerId}`);
    // Симуляція успішної оплати
    return true;
  }

  refund(customerId: string, amount: number): void {
    console.log(`  [Payment] Refunding $${amount.toFixed(2)} to customer ${customerId}`);
  }
}

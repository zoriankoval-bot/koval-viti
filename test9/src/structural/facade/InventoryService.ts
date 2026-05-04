export class InventoryService {
  private stock: Map<string, number> = new Map([
    ['laptop', 5],
    ['phone', 12],
    ['tablet', 0],
  ]);

  checkAvailability(item: string, quantity: number): boolean {
    const available = this.stock.get(item) ?? 0;
    console.log(`  [Inventory] ${item}: ${available} in stock`);
    return available >= quantity;
  }

  reserve(item: string, quantity: number): void {
    const current = this.stock.get(item) ?? 0;
    this.stock.set(item, current - quantity);
    console.log(`  [Inventory] Reserved ${quantity}x ${item}`);
  }
}

export class ShippingService {
  createShipment(item: string, quantity: number, address: string): string {
    const trackingId = `TRACK-${Date.now()}`;
    console.log(`  [Shipping] Shipment created for ${quantity}x ${item} to "${address}"`);
    console.log(`  [Shipping] Tracking ID: ${trackingId}`);
    return trackingId;
  }
}

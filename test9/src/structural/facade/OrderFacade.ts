import { InventoryService } from './InventoryService';
import { PaymentService } from './PaymentService';
import { ShippingService } from './ShippingService';
import { NotificationService } from './NotificationService';

export interface OrderRequest {
  customerId: string;
  item: string;
  quantity: number;
  amount: number;
  address: string;
}

export class OrderFacade {
  private inventory = new InventoryService();
  private payment = new PaymentService();
  private shipping = new ShippingService();
  private notification = new NotificationService();

  placeOrder(order: OrderRequest): boolean {
    console.log(`\nPlacing order: ${order.quantity}x ${order.item} for customer ${order.customerId}`);

    if (!this.inventory.checkAvailability(order.item, order.quantity)) {
      this.notification.send(order.customerId, `Sorry, ${order.item} is out of stock`);
      return false;
    }

    if (!this.payment.charge(order.customerId, order.amount)) {
      this.notification.send(order.customerId, 'Payment failed. Please try again.');
      return false;
    }

    this.inventory.reserve(order.item, order.quantity);
    const trackingId = this.shipping.createShipment(order.item, order.quantity, order.address);
    this.notification.send(order.customerId, `Order confirmed! Tracking: ${trackingId}`);

    console.log('Order placed successfully!\n');
    return true;
  }

  cancelOrder(customerId: string, amount: number): void {
    console.log(`\nCancelling order for customer ${customerId}`);
    this.payment.refund(customerId, amount);
    this.notification.send(customerId, 'Your order has been cancelled and refunded.');
    console.log('Order cancelled.\n');
  }
}

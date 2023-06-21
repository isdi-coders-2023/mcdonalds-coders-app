import { OrderAddressDetailsType, OrderItemType } from "../../../@types/order"
import { BasePaymentStrategy, Payment } from "../../payment/PaymentStrategy"
import { OrderStatus, OrderStatusCreated } from "./orderStatus"

interface IOrder {
  getStatus(): string
  changeStatus(status: OrderStatus): void
}

export class Order implements IOrder {
  total: number = 0
  #status: OrderStatus = new OrderStatusCreated()

  details!: OrderAddressDetailsType
  items!: OrderItemType[]
  paymentType!: BasePaymentStrategy<Payment>

  constructor(status: OrderStatus) {
    this.changeStatus(status);
  }

  changeStatus(status: OrderStatus): void {
    this.#status = status;
    this.#status.setOrder(this);
  }

  getStatus(): string {
    return this.#status.showStatus();
  }
}
abstract class OrderStatus {
  protected order: any

  setOrder(order: any) {
    this.order = order
  }

  abstract updateOrder(): void
  abstract resetOrder(): void
}

export class OrderStatusCreated extends OrderStatus {
  updateOrder() {
  }
  resetOrder() {
  }
}
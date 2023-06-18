import { ORDER_STATUS_LITERAL } from "../../../config";

export abstract class OrderStatus {
  protected order: any

  setOrder(order: any) {
    this.order = order
  }

  showStatus() {
    return this.orderStatusLiteral()
  }

  abstract updateOrder(): void
  abstract resetOrder(): void
  abstract orderStatusLiteral(): string
}

export class OrderStatusCreated extends OrderStatus {
  updateOrder() {
    this.order.changeStatus(new OrderStatusConfirmed)
  }
  resetOrder() {
    this.order.changeStatus(new OrderStatusCanceled)
  }
  orderStatusLiteral() {
    return ORDER_STATUS_LITERAL.CREATED
  }
}

export class OrderStatusConfirmed extends OrderStatus {
  updateOrder() {
    this.order.changeStatus(new OrderStatusInProgress)
  }
  resetOrder() {
    this.order.changeStatus(new OrderStatusCanceled)
  }
  orderStatusLiteral() {
    return ORDER_STATUS_LITERAL.CONFIRMED
  }
}

export class OrderStatusInProgress extends OrderStatus {
  updateOrder() {
    this.order.changeStatus(new OrderStatusWaitingtoDeliver)
  }
  resetOrder() {
    console.log('You can\'t reset the order in the current state')
  }
  orderStatusLiteral() {
    return ORDER_STATUS_LITERAL.IN_PROGRESS
  }
}

export class OrderStatusWaitingtoDeliver extends OrderStatus {
  updateOrder() {
    this.order.changeStatus(new OrderStatusPickedUp)
  }
  resetOrder() {
    console.log('You can\'t reset the order in the current state')
  }
  orderStatusLiteral() {
    return ORDER_STATUS_LITERAL.WAITING_TO_DELIVER
  }
}

export class OrderStatusPickedUp extends OrderStatus {
  updateOrder() {
    this.order.changeStatus(new OrderStatusFinished)
  }
  resetOrder() {
    console.log('You can\'t reset the order in the current state')
  }
  orderStatusLiteral() {
    return ORDER_STATUS_LITERAL.PICKED_UP
  }
}

export class OrderStatusFinished extends OrderStatus {
  updateOrder() {
    console.log('You can\'t update the order in the current state')
  }
  resetOrder() {
    console.log('You can\'t reset the order in the current state')
  }
  orderStatusLiteral() {
    return ORDER_STATUS_LITERAL.FINISHED
  }
}

export class OrderStatusCanceled extends OrderStatus {
  updateOrder() {
    console.log('You can\'t update the order in the current state')
  }
  resetOrder() {
    console.log('You can\'t reset the order in the current state')
  }
  orderStatusLiteral() {
    return ORDER_STATUS_LITERAL.CANCELED
  }
}
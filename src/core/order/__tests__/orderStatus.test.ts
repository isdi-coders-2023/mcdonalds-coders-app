import { Order } from '../classes/order';
import {
  OrderStatusCanceled,
  OrderStatusConfirmed,
  OrderStatusCreated,
  OrderStatusFinished,
  OrderStatusInProgress,
  OrderStatusPickedUp,
  OrderStatusWaitingtoDeliver
} from '../classes/orderStatus';
import { ORDER_STATUS_LITERAL } from "../../../config";

describe('OrderStatus', () => {
  let order: Order;
  let orderStatusCreated: OrderStatusCreated;

  beforeAll(() => {
    orderStatusCreated = new OrderStatusCreated()
    order = new Order(orderStatusCreated)
  })

  describe('OrderStatusCreated', () => {
    it('should return correct order status literal: CREATED', () => {
      expect(orderStatusCreated.orderStatusLiteral()).toBe(ORDER_STATUS_LITERAL.CREATED);
    });

    it('should update order status to confirmed', () => {
      orderStatusCreated.updateOrder();
      expect(order.getStatus()).toBe(ORDER_STATUS_LITERAL.CONFIRMED);
    });

    it('should reset order status to canceled', () => {
      orderStatusCreated.resetOrder();
      expect(order.getStatus()).toBe(ORDER_STATUS_LITERAL.CANCELED);
    });
  });

  describe('OrderStatusConfirmed', () => {
    let orderStatusConfirmed: OrderStatusConfirmed;

    beforeEach(() => {
      orderStatusConfirmed = new OrderStatusConfirmed();
      orderStatusConfirmed.setOrder(order);
    });

    it('should return correct order status literal: CONFIRMED', () => {
      expect(orderStatusConfirmed.orderStatusLiteral()).toBe(ORDER_STATUS_LITERAL.CONFIRMED);
    });

    it('should update order status to in progress', () => {
      orderStatusConfirmed.updateOrder();
      expect(order.getStatus()).toBe(ORDER_STATUS_LITERAL.IN_PROGRESS);
    });

    it('should reset order status to canceled', () => {
      orderStatusConfirmed.resetOrder();
      expect(order.getStatus()).toBe(ORDER_STATUS_LITERAL.CANCELED);
    });
  });

  describe('OrderStatusInProgress', () => {
    let orderStatusInProgress: OrderStatusInProgress;

    beforeEach(() => {
      orderStatusInProgress = new OrderStatusInProgress();
      orderStatusInProgress.setOrder(order);
    });

    it('should return correct order status literal: IN PROGRESS', () => {
      expect(orderStatusInProgress.orderStatusLiteral()).toBe(ORDER_STATUS_LITERAL.IN_PROGRESS);
    });

    it('should update order status to waiting to deliver', () => {
      orderStatusInProgress.updateOrder();
      expect(order.getStatus()).toBe(ORDER_STATUS_LITERAL.WAITING_TO_DELIVER);
    });

    it('shouldn\'t reset the order status', () => {
      console.log = jest.fn();
      orderStatusInProgress.resetOrder();
      expect(console.log).toHaveBeenCalledWith('You can\'t reset the order in the current state');
    });
  });

  describe('OrderStatusWaitingtoDeliver', () => {
    let orderStatusWaitingtoDeliver: OrderStatusWaitingtoDeliver;

    beforeEach(() => {
      orderStatusWaitingtoDeliver = new OrderStatusWaitingtoDeliver();
      orderStatusWaitingtoDeliver.setOrder(order);
    });

    it('should return correct order status literal: WAITING TO DELIVER', () => {
      expect(orderStatusWaitingtoDeliver.orderStatusLiteral()).toBe(ORDER_STATUS_LITERAL.WAITING_TO_DELIVER);
    });

    it('should update order status to picked up', () => {
      orderStatusWaitingtoDeliver.updateOrder();
      expect(order.getStatus()).toBe(ORDER_STATUS_LITERAL.PICKED_UP);
    });

    it('shouldn\'t reset the order status', () => {
      console.log = jest.fn();
      orderStatusWaitingtoDeliver.resetOrder();
      expect(console.log).toHaveBeenCalledWith('You can\'t reset the order in the current state');
    });
  });

  describe('OrderStatusPickedUp', () => {
    let orderStatusPickedUp: OrderStatusPickedUp;

    beforeEach(() => {
      orderStatusPickedUp = new OrderStatusPickedUp();
      orderStatusPickedUp.setOrder(order);
    });

    it('should return correct order status literal: PICKED UP', () => {
      expect(orderStatusPickedUp.orderStatusLiteral()).toBe(ORDER_STATUS_LITERAL.PICKED_UP);
    });

    it('should update order status to finished', () => {
      orderStatusPickedUp.updateOrder();
      expect(order.getStatus()).toBe(ORDER_STATUS_LITERAL.FINISHED);
    });

    it('shouldn\'t reset the order status', () => {
      console.log = jest.fn();
      orderStatusPickedUp.resetOrder();
      expect(console.log).toHaveBeenCalledWith('You can\'t reset the order in the current state');
    });
  });

  describe('OrderStatusFinished', () => {
    let orderStatusFinished: OrderStatusFinished;

    beforeEach(() => {
      orderStatusFinished = new OrderStatusFinished();
      orderStatusFinished.setOrder(order);
    });

    it('should return correct order status literal: FINISHED', () => {
      expect(orderStatusFinished.orderStatusLiteral()).toBe(ORDER_STATUS_LITERAL.FINISHED);
    });

    it('shouldn\'t update the order status', () => {
      console.log = jest.fn();
      orderStatusFinished.updateOrder();
      expect(console.log).toHaveBeenCalledWith('You can\'t update the order in the current state');
    });

    it('shouldn\'t reset the order status', () => {
      console.log = jest.fn();
      orderStatusFinished.resetOrder();
      expect(console.log).toHaveBeenCalledWith('You can\'t reset the order in the current state');
    });
  });

  describe('OrderStatusCanceled', () => {
    let orderStatusCanceled: OrderStatusCanceled;

    beforeEach(() => {
      orderStatusCanceled = new OrderStatusCanceled();
      orderStatusCanceled.setOrder(order);
    });

    it('should return correct order status literal: CANCELED', () => {
      expect(orderStatusCanceled.orderStatusLiteral()).toBe(ORDER_STATUS_LITERAL.CANCELED);
    });

    it('shouldn\'t update the order status', () => {
      console.log = jest.fn();
      orderStatusCanceled.updateOrder();
      expect(console.log).toHaveBeenCalledWith('You can\'t update the order in the current state');
    });

    it('shouldn\'t reset the order status', () => {
      console.log = jest.fn();
      orderStatusCanceled.resetOrder();
      expect(console.log).toHaveBeenCalledWith('You can\'t reset the order in the current state');
    });
  });

});

import { PAYMENT_TYPE } from '../../config';
import { CashPaymentStrategy } from './CashPayment';

describe('CashPaymentStrategy', () => {
  let cashStrategy: CashPaymentStrategy;

  beforeEach(() => {
    cashStrategy = new CashPaymentStrategy();
  });

  it('should return cash as the payment method', () => {
    expect(cashStrategy.getPaymentMethod()).toBe(PAYMENT_TYPE.CASH);
  });

  it('should return true for isValid method', () => {
    expect(cashStrategy.isValid()).toBe(true);
  });

  it('should return an empty error message', () => {
    expect(cashStrategy.getErrorMessage()).toBe('');
  });
});

import { PAYMENT_TYPE } from '../../config';
import { WireTransferPaymentStrategy } from './WireTransferPayment';

describe('WireTransferPaymentStrategy', () => {
  let wireTransferStrategy: WireTransferPaymentStrategy;

  beforeEach(() => {
    wireTransferStrategy = new WireTransferPaymentStrategy();
  });

  it('should return wire transfer as the payment method', () => {
    expect(wireTransferStrategy.getPaymentMethod()).toBe(
      PAYMENT_TYPE.WIRE_TRANSFER
    );
  });

  it('should set sender name correctly', () => {
    const senderName = 'John Doe';
    wireTransferStrategy.setSenderName(senderName);
    expect(wireTransferStrategy.getData().senderName).toBe(senderName);
  });

  it('should set sender account number correctly', () => {
    const senderAccountNumber = '1234567890';
    wireTransferStrategy.setSenderAccountNumber(senderAccountNumber);
    expect(wireTransferStrategy.getData().senderAccountNumber).toBe(
      senderAccountNumber
    );
  });

  it('should set sender bank name correctly', () => {
    const senderBankName = 'ABC Bank';
    wireTransferStrategy.setSenderBankName(senderBankName);
    expect(wireTransferStrategy.getData().senderBankName).toBe(senderBankName);
  });

  it('should return an empty error message', () => {
    expect(wireTransferStrategy.getErrorMessage()).toBe('');
  });
});

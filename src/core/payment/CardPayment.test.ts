import { PAYMENT_TYPE } from '../../config';
import { CardPaymentStrategy } from './CardPayment';

describe('CardPaymentStrategy', () => {
  let cardStrategy: any;

  beforeEach(() => {
    cardStrategy = new CardPaymentStrategy();
  });

  it('should return card as the payment method', () => {
    expect(cardStrategy.getPaymentMethod()).toBe(PAYMENT_TYPE.DEBIT);
  });

  it('should set card number correctly', () => {
    const cardNumber = '1234567890';
    cardStrategy.setCardNumber(cardNumber);
    expect(cardStrategy.getData().number).toBe(cardNumber);
  });

  it('should set card date correctly', () => {
    const cardDate = '12/23';
    cardStrategy.setCardDate(cardDate);
    expect(cardStrategy.getData().date).toBe(cardDate);
  });

  it('should set card cvc correctly', () => {
    const cardCvc = '123';
    cardStrategy.setCardCvc(cardCvc);
    expect(cardStrategy.getData().cvc).toBe(cardCvc);
  });

  it('should set card validity and error message correctly', () => {
    const isValid = true;
    const errorMessage = 'Invalid card';
    cardStrategy.setCardIsValid(isValid, errorMessage);
    expect(cardStrategy.getData().isValid).toBe(isValid);
    expect(cardStrategy.getErrorMessage()).toBe(errorMessage);
  });
});

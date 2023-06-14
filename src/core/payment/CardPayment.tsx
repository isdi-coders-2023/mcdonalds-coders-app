import { CardPaymentInputs } from '../../components/form/CardPaymentInputs';
import { PAYMENT_TYPE } from '../../config';
import { Payment, PaymentStrategy } from './PaymentStrategy';

export interface CardPayment extends Payment {
  number: string;
  date: string;
  cvc: string;
}

export class CardPaymentStrategy extends PaymentStrategy<CardPayment> {
  constructor() {
    super({ number: '', date: '', cvc: '', isValid: false });
  }

  getPaymentMethod() {
    return PAYMENT_TYPE.DEBIT;
  }

  setCardNumber(number: string) {
    this.data = { ...this.data, number };
  }

  setCardDate(date: string) {
    this.data = { ...this.data, date };
  }

  setCardCvc(cvc: string) {
    this.data = { ...this.data, cvc };
  }

  setCardIsValid(isValid: boolean, errorMessage?: string) {
    this.data = { ...this.data, isValid };
    this.errorMessage = errorMessage || '';
  }

  render() {
    return <CardPaymentInputs paymentStrategy={this} />;
  }
}

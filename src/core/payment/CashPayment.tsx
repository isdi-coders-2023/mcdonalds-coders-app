import { PAYMENT_TYPE } from '../../config';
import { Payment, PaymentStrategy } from './PaymentStrategy';

export class CashPaymentStrategy extends PaymentStrategy<Payment> {
  constructor() {
    super({ isValid: true });
  }
  getPaymentMethod(): PAYMENT_TYPE {
    return PAYMENT_TYPE.CASH;
  }

  render() {
    return <></>;
  }
}

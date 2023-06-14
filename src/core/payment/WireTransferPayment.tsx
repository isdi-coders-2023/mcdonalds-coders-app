import { TransferPaymentInputs } from '../../components/form/TransferPaymentInputs';
import { PAYMENT_TYPE } from '../../config';
import { Payment, PaymentStrategy } from './PaymentStrategy';

export interface WireTransferPayment extends Payment {
  senderName: string;
  senderAccountNumber: string;
  senderBankName: string;
}

export class WireTransferPaymentStrategy extends PaymentStrategy<WireTransferPayment> {
  constructor() {
    super({
      senderName: '',
      senderAccountNumber: '',
      senderBankName: '',
      isValid: false,
    });
  }

  getPaymentMethod() {
    return PAYMENT_TYPE.WIRE_TRANSFER;
  }

  setSenderName(name: string) {
    this.data = { ...this.data, senderName: name };
  }

  setSenderAccountNumber(number: string) {
    this.data = { ...this.data, senderAccountNumber: number };
  }

  setSenderBankName(name: string) {
    this.data = { ...this.data, senderBankName: name };
  }

  render() {
    return <TransferPaymentInputs paymentStrategy={this} />;
  }
}

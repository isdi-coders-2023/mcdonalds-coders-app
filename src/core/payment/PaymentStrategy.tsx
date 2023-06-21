import { ReactNode } from 'react';
import { PAYMENT_TYPE } from '../../config';

export interface BasePaymentStrategy<T> {
  getPaymentMethod(): PAYMENT_TYPE;
  isValid(): boolean;
  getErrorMessage(): string;
  getData(): T;
  pay?(): void;
  render(): ReactNode;
}

export interface Payment {
  isValid: boolean;
}

export abstract class PaymentStrategy<T extends Payment>
  implements BasePaymentStrategy<T>
{
  protected errorMessage: string = '';
  protected data: T;

  constructor(data: T) {
    this.data = data;
  }

  abstract getPaymentMethod(): PAYMENT_TYPE;

  getErrorMessage() {
    return this.errorMessage;
  }

  getData() {
    return this.data;
  }

  isValid() {
    return this.data.isValid;
  }

  abstract render(): ReactNode;
}

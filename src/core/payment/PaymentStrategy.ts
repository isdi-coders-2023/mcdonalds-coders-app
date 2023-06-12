import { PAYMENT_TYPE } from "../../config";

export type CardData = {
  number: string;
  date: string;
  cvc: string;
  isValid: boolean;
};

export interface PaymentStrategy {
  getPaymentMethod(): PAYMENT_TYPE;
  pay?(): any;
}

class CashPaymentStrategy implements PaymentStrategy {
  getPaymentMethod(): PAYMENT_TYPE {
    return PAYMENT_TYPE.CASH;
  }
}
export class DebitPaymentStrategy implements PaymentStrategy {
  private cardData: CardData;

  constructor(cardData?: CardData) {
    this.cardData = cardData || { number: '', date: '', cvc: '', isValid: false };
  }

  getPaymentMethod(): PAYMENT_TYPE {
    return PAYMENT_TYPE.DEBIT;
  }

  getCardData(): CardData {
    return { ...this.cardData };
  }

  isValidCard(): boolean {
    return this.cardData.isValid;
  }

  setCardNumber(number: string) {
    this.cardData = { ...this.cardData, number };
  }

  setCardDate(date: string) {
    this.cardData = { ...this.cardData, date };
  }

  setCardCvc(cvc: string) {
    this.cardData = { ...this.cardData, cvc };
  }

  setCardIsValid(isValid: boolean) {
    this.cardData = { ...this.cardData, isValid };
  }
}

class wireTransferPaymentStrategy implements PaymentStrategy {
  getPaymentMethod(): PAYMENT_TYPE {
    return PAYMENT_TYPE.WIRE_TRANSFER;
  }
}

export const paymentStrategyMap = {
  [PAYMENT_TYPE.CASH]: CashPaymentStrategy,
  [PAYMENT_TYPE.DEBIT]: DebitPaymentStrategy,
  [PAYMENT_TYPE.WIRE_TRANSFER]: wireTransferPaymentStrategy,
}

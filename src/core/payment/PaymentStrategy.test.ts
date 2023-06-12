import { PAYMENT_TYPE } from "../../config";
import { CardData, DebitPaymentStrategy, paymentStrategyMap } from "./PaymentStrategy";

describe("Payment Strategies", () => {
  it("should return the correct payment method for cash payment strategy", () => {
    const cashPayment = new paymentStrategyMap[PAYMENT_TYPE.CASH]();

    expect(cashPayment.getPaymentMethod()).toBe(PAYMENT_TYPE.CASH);
  });

  it("should return the correct payment method for debit payment strategy", () => {
    const debitPayment = new paymentStrategyMap[PAYMENT_TYPE.DEBIT]();

    expect(debitPayment.getPaymentMethod()).toBe(PAYMENT_TYPE.DEBIT);
  });

  it("should return the correct payment method for wire transfer payment strategy", () => {
    const wireTransferPayment = new paymentStrategyMap[PAYMENT_TYPE.WIRE_TRANSFER]();

    expect(wireTransferPayment.getPaymentMethod()).toBe(PAYMENT_TYPE.WIRE_TRANSFER);
  });


  describe("Debit Payment Strategy", () => {
    let debitPayment: DebitPaymentStrategy;

    beforeEach(() => {
      debitPayment = new DebitPaymentStrategy();
    });

    it("should return the correct payment method", () => {
      expect(debitPayment.getPaymentMethod()).toBe(PAYMENT_TYPE.DEBIT);
    });

    it("should set the card number", () => {
      const cardNumber = "4242424242424242";
      debitPayment.setCardNumber(cardNumber);
      expect(debitPayment.getCardData().number).toBe(cardNumber);
    });

    it("should set the card date", () => {
      const cardDate = "12/23";
      debitPayment.setCardDate(cardDate);
      expect(debitPayment.getCardData().date).toBe(cardDate);
    });

    it("should set the card CVC", () => {
      const cardCvc = "123";
      debitPayment.setCardCvc(cardCvc);
      expect(debitPayment.getCardData().cvc).toBe(cardCvc);
    });

    it("should set the card validity", () => {
      const isValid = true;
      debitPayment.setCardIsValid(isValid);
      expect(debitPayment.getCardData().isValid).toBe(isValid);
    });

    it("should return the card data", () => {
      const cardData: CardData = {
        number: "4242424242424242",
        date: "12/23",
        cvc: "123",
        isValid: true,
      };
      debitPayment.setCardNumber(cardData.number);
      debitPayment.setCardDate(cardData.date);
      debitPayment.setCardCvc(cardData.cvc);
      debitPayment.setCardIsValid(cardData.isValid);

      expect(debitPayment.getCardData()).toEqual(cardData);
    });

    it("should indicate whether the card is valid", () => {
      debitPayment.setCardIsValid(true);
      expect(debitPayment.isValidCard()).toBe(true);

      debitPayment.setCardIsValid(false);
      expect(debitPayment.isValidCard()).toBe(false);
    });
  });
});

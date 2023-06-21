import { PAYMENT_TYPE } from "../../config";
import { CardPaymentStrategy } from "./CardPayment";
import { CashPaymentStrategy } from "./CashPayment";
import { WireTransferPaymentStrategy } from "./WireTransferPayment";

export const paymentStrategyMap = {
  [PAYMENT_TYPE.CASH]: CashPaymentStrategy,
  [PAYMENT_TYPE.DEBIT]: CardPaymentStrategy,
  [PAYMENT_TYPE.WIRE_TRANSFER]: WireTransferPaymentStrategy,
};

import { useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { OrderType } from '../../../@types/order';
import { PAYMENT_TYPE } from '../../../config';
import { paymentStrategyMap } from '../../../core/payment';
import {
  BasePaymentStrategy,
  Payment,
} from '../../../core/payment/PaymentStrategy';
import useFormat from '../../../hooks/useFormat';
import McButton from '../../buttons/McButton';
import InfoModal from '../../modal/InfoModal';

export const useModal = () => {
  const [message, setModalMessage] = useState('');
  const [isOpen, setShowModal] = useState(false);
  const toggle = () => setShowModal(!isOpen);

  const displayModal = (_message: string) => {
    setModalMessage(_message);
    toggle();
  };

  return { displayModal, toggle, message, isOpen };
};

type DetailProps = {
  order: OrderType;
  confirmOrder: (paymentStrategy: BasePaymentStrategy<Payment>) => void;
};

export const PaymentDetail = ({ order, confirmOrder }: DetailProps) => {
  const [paymentStrategy, setPaymentStrategy] = useState<
    BasePaymentStrategy<Payment>
  >(new paymentStrategyMap[PAYMENT_TYPE.CASH]());
  const { displayModal, isOpen, message, toggle } = useModal();
  const [currencyFormatter] = useFormat();

  const handleSendPayment = () => {
    const errorMessage = paymentStrategy.getErrorMessage();

    if (errorMessage) return displayModal(errorMessage);

    return confirmOrder(paymentStrategy);
  };

  const addressTitle = order.details.isDelivery
    ? 'Domicilio'
    : 'Dirección de retiro en el local';

  return (
    <div className="Detail">
      <div className="detail-box">
        <h1 className="title">
          <strong>Detalle del pedido</strong>
        </h1>
        <div className="address">
          <h3>
            <strong>{addressTitle}</strong>
          </h3>
          <h3>{order.details.address}</h3>
        </div>
        <div className="items">
          <h3>
            <strong>Resumen</strong>
          </h3>
          {order.items.map((value, index) => (
            <div className="item" key={index}>
              <p className="name">{value.name}</p>
              <p>{'x' + value.quantity}</p>
              <p>
                {currencyFormatter().format(
                  value.pricePerUnit * value.quantity
                )}
              </p>
            </div>
          ))}
        </div>
        <Form>
          <FormGroup tag="fieldset">
            <h1>
              <strong>Método de pago</strong>
            </h1>
            <div className="radio-group">
              {Object.values(PAYMENT_TYPE).map((paymentType, index) => {
                return (
                  <FormGroup key={paymentType} check>
                    <Label check className="pay-method-label">
                      <Input
                        type="radio"
                        defaultChecked={index === 0}
                        name="paymethod"
                        className="pay-method-radio"
                        onClick={() =>
                          setPaymentStrategy(
                            new paymentStrategyMap[paymentType]()
                          )
                        }
                      />
                      {paymentType}
                    </Label>
                  </FormGroup>
                );
              })}
            </div>
          </FormGroup>
        </Form>
        {paymentStrategy.render()}
      </div>
      <div className="detail-total">
        <p>Total</p>
        <p>{currencyFormatter().format(order.total)}</p>
      </div>
      <McButton text="Enviar pedido" onClick={handleSendPayment} fixed />
      <InfoModal
        toggle={toggle}
        isOpen={isOpen}
        title="Atención"
        message={message}
      />
    </div>
  );
};

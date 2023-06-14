import { useEffect } from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { css } from 'styled-components';
import { CardPaymentStrategy } from '../../core/payment/CardPayment';

type Props = {
  paymentStrategy: CardPaymentStrategy;
};

export const CardPaymentInputs = ({ paymentStrategy }: Props) => {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs({
    errorMessages: ERROR_MESSAGES,
  });

  useEffect(() => {
    paymentStrategy.setCardIsValid(!wrapperProps.error, wrapperProps.error);
  }, [wrapperProps.error, paymentStrategy]);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    paymentStrategy.setCardNumber(e.target.value);
  };

  const handleCardDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    paymentStrategy.setCardDate(e.target.value);
  };

  const handleCardCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    paymentStrategy.setCardCvc(e.target.value);
  };

  return (
    <PaymentInputsWrapper {...wrapperProps} styles={styles}>
      <svg {...getCardImageProps({ images: images.images })} />
      <input {...getCardNumberProps({ onChange: handleCardNumberChange })} />
      <input {...getExpiryDateProps({ onChange: handleCardDateChange })} />
      <input {...getCVCProps({ onChange: handleCardCVCChange })} />
    </PaymentInputsWrapper>
  );
};

const ERROR_MESSAGES = {
  emptyCardNumber: 'El número de la tarjeta es inválido',
  invalidCardNumber: 'El número de la tarjeta es inválido', // valid example: 4242 4242 4242 4242
  emptyExpiryDate: 'La fecha de expiración es inválida',
  monthOutOfRange: 'El mes de expiración debe estar entre 01 y 12',
  yearOutOfRange: 'El año de expiración no puede estar en el pasado',
  dateOutOfRange: 'La fecha de expiración no puede estar en el pasado',
  invalidExpiryDate: 'La fecha de expiración es inválida',
  emptyCVC: 'El código de seguridad es inválido',
  invalidCVC: 'El código de seguridad es inválido',
};

const styles = {
  fieldWrapper: {
    base: css`
      margin-bottom: 1rem;
      width: fit-content;
    `,
    errored: css`
      border-color: red;
    `,
  },
  inputWrapper: {
    base: css`
      border-color: green;
      height: 40px;
    `,
    errored: css`
      border-color: red;
    `,
    focused: css`
      border-color: blue;
    `,
  },
  input: {
    base: css`
      color: green;
      font-size: 14px;
    `,
    errored: css`
      color: red;
    `,
    cardNumber: css`
      width: 15rem;
    `,
    expiryDate: css`
      width: 10rem;
    `,
    cvc: css`
      width: 5rem;
    `,
  },
  errorText: {
    base: css`
      margin-top: 10px;
      color: red;
      font-size: 12px;
    `,
  },
};

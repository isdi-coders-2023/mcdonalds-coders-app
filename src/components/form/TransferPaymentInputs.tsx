import React, { useState } from 'react';
import { WireTransferPaymentStrategy } from '../../core/payment/WireTransferPayment';

type Props = {
  paymentStrategy: WireTransferPaymentStrategy;
};

export const TransferPaymentInputs = ({ paymentStrategy }: Props) => {
  const [senderName, setSenderName] = useState('');
  const [senderAccountNum, setSenderAccountNumber] = useState('');
  const [senderBankName, setSenderBankName] = useState('');

  const handleSenderName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenderName(e.target.value);
    paymentStrategy.setSenderName(e.target.value);
  };

  const handleSenderAccountNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenderAccountNumber(e.target.value);
    paymentStrategy.setSenderAccountNumber(e.target.value);
  };

  const handleSenderBankName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenderBankName(e.target.value);
    paymentStrategy.setSenderBankName(e.target.value);
  };

  return (
    <>
      <label>
        Sender's Name:
        <input type="text" value={senderName} onChange={handleSenderName} />
      </label>
      <label>
        Sender's Account Number:
        <input
          type="text"
          value={senderAccountNum}
          onChange={handleSenderAccountNum}
        />
      </label>
      <label>
        Sender's Bank Name:
        <input
          type="text"
          value={senderBankName}
          onChange={handleSenderBankName}
        />
      </label>
      <br />
    </>
  );
};

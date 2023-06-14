import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { STORAGE, URLS } from '../../../config';
import { useOrderContext } from '../../../context/OrderContext';
import {
  BasePaymentStrategy,
  Payment,
} from '../../../core/payment/PaymentStrategy';
import useLocalStorage from '../../../hooks/useLocalStorage';
import UserForm from '../../form/UserForm';
import './Checkout.css';
import { PaymentDetail } from './PaymentDetail';

const Checkout = () => {
  const navigate = useNavigate();
  // User validation check
  const [isValidated, setIsValidated] = useState(false);
  const { order, updateOrder } = useOrderContext();
  const { getStorageItem } = useLocalStorage();

  useEffect(() => {
    // Exit if there is no order in the state
    if (order.items.length <= 0) {
      navigate(URLS.ROOT);
    }

    const user = getStorageItem(STORAGE.USER);
    if (user) {
      setIsValidated(true);
    }
  }, [order, navigate, getStorageItem]);

  const confirmOrder = (paymentStrategy: BasePaymentStrategy<Payment>) => {
    updateOrder({
      ...order,
      confirmed: true,
      paymentType: paymentStrategy.getPaymentMethod(),
    });
    navigate(URLS.ROOT);
  };

  return (
    <div className="Checkout">
      {!isValidated && <UserForm setIsValidated={setIsValidated} />}
      {isValidated && (
        <PaymentDetail order={order} confirmOrder={confirmOrder} />
      )}
    </div>
  );
};

export default Checkout;

// Core
import { useContext } from 'react';
import { Link } from 'react-router-dom';
// Context
import { BasketContext } from '../../Context/basket';
// Components
import { Addreas } from './Address';
import { ProductsList } from './ProductsList';
import { PaymentMethod } from './PaymentMethod';
// Style
import './payment.css';
// Stripe

export const Payment = (): JSX.Element => {
  const { basket } = useContext(BasketContext);
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <Link className="payment__link" to="/basket">
            {basket?.products.length} items
          </Link>
          )
        </h1>
        <div className="payment__section">
          <Addreas />
        </div>
        <div className="payment__section">
          <PaymentMethod />
        </div>
        <div className="payment__section">
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

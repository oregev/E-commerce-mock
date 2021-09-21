// Core
import { useContext } from 'react';
// Router
import { useHistory } from 'react-router-dom';
// Context
import { CurrencyContext } from '../../Context/currency';
import { BasketContext } from '../../Context/basket';
// Styles
import './basket.css';
// Utils
// import CurrencyFormat from 'react-currency-format';

export const BasketCheckout: React.FC = (): JSX.Element => {
  const history = useHistory();
  const { currency } = useContext(CurrencyContext);
  const { basket } = useContext(BasketContext);

  const title = `Subtotal (${basket.products.length} items): `;

  const handleClick = () => history.push('/payment');

  return (
    <div className="basket__checkout">
      {/* <CurrencyFormat /> */}
      <div className="basket__checkout_header">
        <span className="basket__subtotal">
          {title}
          <strong>
            <small>{currency.coin}</small>
            {basket.subTotal}
          </strong>
        </span>
      </div>
      <div className="basket__checkout_body">
        <input type="checkbox" />
        <span>This order contains a gift</span>
      </div>
      <div className="basket__checkout_footer">
        <button type="button" onClick={handleClick}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

// <CurrencyFormat
//   renderText={(value) => (
//     <>
//       <p>
//         Subtotal (o items): <strong>0</strong>
//       </p>
//       <small>
//         <input type="checkbox" /> This order contains a gift
//       </small>
//     </>
//   )}
//   decimalScale={2}
//   value={value}
//   displayType="text"
//   thousandSeparator
//   prefix="$"
// />;

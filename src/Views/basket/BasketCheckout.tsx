// Core
import { useContext } from 'react';
// Context
import { CurrencyContext } from '../../Context/currency';
import { BasketContext } from '../../Context/basket';
// Types;
import { ProductType } from '../../Context/products';
// Styles
import './basket.css';
// Utils
// import CurrencyFormat from 'react-currency-format';

export const BasketCheckout: React.FC = (): JSX.Element => {
  const { currency } = useContext(CurrencyContext);
  const { basket } = useContext(BasketContext);
  const subtotal = (basket.products as [])
    .reduce((acc: number, next: ProductType) => acc + next.price, 0)
    .toFixed(2);

  const title = `Subtotal (${basket.products.length} items): `;

  return (
    <div className="basket__checkout">
      {/* <CurrencyFormat /> */}
      <div className="basket__checkout_header">
        <span className="basket__subtotal">
          {title}
          <strong>
            <small>{currency.coin}</small>
            {subtotal}
          </strong>
        </span>
      </div>
      <div className="basket__checkout_body">
        <input type="checkbox" />
        <span>This order contains a gift</span>
      </div>
      <div className="basket__checkout_footer">
        <button type="button">Proceed to Checkout</button>
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

// Core
import { useContext } from 'react';
import { ProductsContext } from '../../Context/ProductsContext';
// Components
// import { Row } from './Row';
// import CurrencyFormat from 'react-currency-format';
// Styles
import './basket.css';

export const BasketCheckout: React.FC = (): JSX.Element => {
  const { products } = useContext(ProductsContext);
  console.log(products);
  const productCount = products.length;
  const currency = '$';
  const subtotal = 2.99;

  const title = `Subtotal (${productCount} items): `;

  return (
    <div className="basket__checkout">
      {/* <CurrencyFormat /> */}
      <div className="basket__checkout_header">
        <span className="basket__subtotal">
          {title}
          <strong>
            <small>{currency}</small>
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

// Components
// import { Row } from './Row';

// Styles
import './basket.css';

export const BasketCheckout: React.FC = (): JSX.Element => {
  // console.log('BasketCheckout Render');

  const productCount = 2;
  const currency = '$';
  const subtotal = 2.99;

  const title = `Subtotal (${productCount} items): `;

  return (
    <div className="basket__checkout">
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

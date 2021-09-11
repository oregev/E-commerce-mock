// Components
// import { Product } from 'Views/home/Product';
import { BasketCheckout } from './BasketCheckout';

// Styles
import './basket.css';

const IMAGE_URL =
  'https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492669_.jpg';
export const Basket: React.FC = (): JSX.Element => (
  <div className="basket">
    <div className="basket__left">
      <div className="basket__ad_container">
        <img src={IMAGE_URL} alt="" />
        <div>
          <h2 className="basket__title">Your shopping Basket</h2>
        </div>
      </div>
      <div className="basket__products">
        {/* <Product title="product 4" imgUrl="" price={55.99} rating={4} />
          <Product title="product 5" imgUrl="" price={12.99} rating={2} />
          <Product title="product 6" imgUrl="" price={1.99} rating={1} /> */}
      </div>
    </div>
    <div className="basket__right">
      <BasketCheckout />
    </div>
  </div>
);

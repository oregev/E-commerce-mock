// Core
import { useContext } from 'react';
// Context
import { BasketContext } from '../../Context/basket';
import { UserContext } from '../../Context/user';
// Components
import { Product } from '../../Components/products/product/Product';
import { BasketCheckout } from './BasketCheckout';
// Assets
import BasketBanner from '../../Assets/images/basket-banner.jpg';
// Styles
import './basket.css';

export const Basket: React.FC = (): JSX.Element => {
  const { basket } = useContext(BasketContext);
  const { user } = useContext(UserContext);
  return (
    <div className="basket">
      <div className="basket__left">
        <div className="basket__ad_container">
          <img src={BasketBanner} alt="" />
          <div>
            <h3>Hello, {user.data?.email || 'Guest'}</h3>
            <h2 className="basket__title">Your shopping Basket</h2>
          </div>
        </div>
        <div className="basket__products">
          {basket.products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
      <div className="basket__right">
        <BasketCheckout />
      </div>
    </div>
  );
};

// Core
import { useContext, useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// Context
import { UserContext } from '../../Context/user';
import { BasketContext } from '../../Context/basket';
// Components
import { Product } from '../../Components/products/product/Product';
import { BasketCheckout } from './BasketCheckout';
// Assets
import BasketBanner from '../../Assets/images/basket-banner.jpg';
// Styles
import './basket.css';

export const Basket: React.FC = (): JSX.Element => {
  const { user } = useContext(UserContext);
  const { basket } = useContext(BasketContext);

  const userEmail = user.data?.email ? user.data?.email : null;
  const userName: string | null | undefined = userEmail
    ? userEmail.slice(0, userEmail.indexOf('@'))
    : 'Guest';

  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  return (
    <div className="basket">
      <div className="basket__left">
        <div className="basket__ad_container">
          <img src={BasketBanner} alt="" />
          <div>
            <h3>Hello, {userName}</h3>
            <h2 className="basket__title">Your shopping Basket</h2>
          </div>
        </div>
        <div className="basket__products">
          <TransitionGroup>
            {basket.products.map((product) => (
              <CSSTransition in={mount} timeout={500} classNames="productEffect" unmountOnExit>
                <Product key={product.id} data={product} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
      <div className="basket__right">
        <BasketCheckout />
      </div>
    </div>
  );
};

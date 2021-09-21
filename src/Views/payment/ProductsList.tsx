// Core
import { useContext, useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// Context
import { BasketContext } from '../../Context/basket';
// Components
import { Product } from '../../Components/products/product/Product';

export const ProductsList = (): JSX.Element => {
  const { basket } = useContext(BasketContext);

  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  return (
    <>
      <div className="payment__title">
        <h3>Review items and delivery</h3>
      </div>
      <div className="payment__items">
        <TransitionGroup>
          {basket.products.map((product) => (
            <CSSTransition in={mount} timeout={500} classNames="productEffect" unmountOnExit>
              <Product key={product.id} data={product} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </>
  );
};

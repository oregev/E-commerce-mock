// Core
import { useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// Types
import { ProductType } from '../../../Context/products';
// Components
import { Product } from '../product/Product';
// Style
import './productsRow.css';

interface IProps {
  products: ProductType[];
}

export const ProductsRow = ({ products }: IProps): JSX.Element => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  return (
    <TransitionGroup>
      <div className="row">
        {products.map((data, index) => (
          <CSSTransition
            key={index.toString()}
            in={mount}
            timeout={500}
            classNames="productEffect"
            unmountOnExit
          >
            <Product data={data} />
          </CSSTransition>
        ))}
      </div>
    </TransitionGroup>
  );
};

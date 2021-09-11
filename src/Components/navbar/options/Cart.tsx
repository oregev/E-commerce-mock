// Core
import { useContext } from 'react';
// Mui
import { ShoppingBasket } from '@material-ui/icons';
// Router
import { Link } from 'react-router-dom';
// context
import { ProductsContext } from '../../../Context/ProductsContext';

export const Cart: React.FC = (): JSX.Element => {
  const { products } = useContext(ProductsContext);

  return (
    <Link to="/basket" className="cart__link">
      <div className="cart">
        <ShoppingBasket />
        <span className="cart__count">{products.length}</span>
      </div>
    </Link>
  );
};

// Core
import { useContext } from 'react';
// Mui
import { ShoppingBasket } from '@mui/icons-material';
// Router
import { Link } from 'react-router-dom';
// context
import { BasketContext } from '../../../Context/basket';

export const Cart: React.FC = (): JSX.Element => {
  const { basket } = useContext(BasketContext);

  return (
    <Link to="/basket" className="cart__link">
      <div className="cart">
        <ShoppingBasket />
        <span className="cart__count">{basket.products.length}</span>
      </div>
    </Link>
  );
};

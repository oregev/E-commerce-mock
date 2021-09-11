// Router
import { Link } from 'react-router-dom';
// Mui
import { ShoppingBasket } from '@material-ui/icons';

export const Cart: React.FC = (): JSX.Element => {
  const productsInCart = 0;

  return (
    <Link to="/basket" className="cart__link">
      <div className="cart">
        <ShoppingBasket />
        <span className="cart__count">{productsInCart}</span>
      </div>
    </Link>
  );
};

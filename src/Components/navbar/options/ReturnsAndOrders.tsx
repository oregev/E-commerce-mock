import { Link } from 'react-router-dom';

export const ReturnsAndOrders: React.FC = (): JSX.Element => (
  <Link to="/orders" className="orders__link">
    <div className="returns__orders">
      <span className="orders__title">Returns</span>
      <span className="orders__subtitle">& Orders</span>
    </div>
  </Link>
);

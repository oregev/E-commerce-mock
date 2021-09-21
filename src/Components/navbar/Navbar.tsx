// Components
import { Account, Cart, ReturnsAndOrders, Prime } from './options';
// Styles
import './navbar.css';

export const Navbar: React.FC = (): JSX.Element => (
  <div className="navbar">
    <div className="navbar__option">
      <Account />
    </div>
    <div className="navbar__option">
      <ReturnsAndOrders />
    </div>
    <div className="navbar__option">
      <Prime />
    </div>
    <div className="navbar__option">
      <Cart />
    </div>
  </div>
);

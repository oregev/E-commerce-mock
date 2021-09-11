// Components
import { Account } from './options/Account';
import { Cart } from './options/Cart';
import { Orders } from './options/Orders';
import { Prime } from './options/Prime';
// Styles
import './navbar.css';

export const Navbar: React.FC = (): JSX.Element => (
  <div className="navbar">
    <div className="navbar__option">
      <Account />
    </div>
    <div className="navbar__option">
      <Orders />
    </div>
    <div className="navbar__option">
      <Prime />
    </div>
    <div className="navbar__option">
      <Cart />
    </div>
  </div>
);

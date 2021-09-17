// Components
import { Account, Cart, Orders, Prime } from './options';
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

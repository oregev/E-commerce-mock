// Mui
import { Flag } from '@mui/icons-material';
// Components
import { LogoContainer } from '../logo/LogoContainer';
import { DeliverTo } from './DeliverTo';
import { Searchbar } from '../searchbar/Searchbar';
import { Navbar } from '../navbar/Navbar';
// Styles
import './header.css';
// import { UsFlagIcon } from '../../Assets/icons/UsFlagIcon';

export const Header: React.FC = (): JSX.Element => (
  <div className="header">
    <div className="header__option_container">
      <LogoContainer />
    </div>
    <div className="header__option_container">
      <DeliverTo />
    </div>
    <div className="header__option_container_flex">
      <Searchbar />
    </div>
    <div className="header__option_container">
      {/* <UsFlagIcon /> */}
      <Flag style={{ color: 'white' }} />
    </div>
    <div className="header__option_container">
      <Navbar />
    </div>
  </div>
);

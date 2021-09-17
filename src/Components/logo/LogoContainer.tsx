// Router
import { Link } from 'react-router-dom';
// Assets
import amazonLogoIcon from '../../Assets/images/amazon-logo.png';
// Styles
import './logoContainer.css';

export const LogoContainer: React.FC = (): JSX.Element => (
  <div className="amazon-logo_container">
    <Link to="/">
      <img className="amazon-logo" src={amazonLogoIcon} alt="" />
    </Link>
  </div>
);

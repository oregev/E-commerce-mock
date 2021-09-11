// Router
import { Link } from 'react-router-dom';
// Assets
import amazonLogoIcon from '../../Assets/images/amazon-logo.png';
// Styles
import './logoContainer.css';

export const LogoContainer: React.FC = (): JSX.Element => (
  <Link to="/">
    <div className="amazon-logo_container">
      <img className="amazon-logo" src={amazonLogoIcon} alt="" />
    </div>
  </Link>
);

// Core
import { useContext } from 'react';
// Router
import { Link } from 'react-router-dom';
// Firebase
import { signOut } from 'firebase/auth';
import { auth } from '../../../Config';
// Context
import { UserContext } from '../../../Context/user';

export const Account: React.FC = (): JSX.Element => {
  const { user } = useContext(UserContext);
  const userName = user.data?.email || 'Guest';

  const handleAuthentication = () => {
    if (user) {
      signOut(auth);
    }
  };

  return (
    <div className="account">
      <Link
        to={!user.data ? 'login' : '/'}
        className="account__link"
        onClick={handleAuthentication}
      >
        <span className="account__title">{`Hello ${userName}`}</span>
        <span className="account__subtitle">{user.data ? 'Sign out' : 'Sign in'}</span>
      </Link>
    </div>
  );
};

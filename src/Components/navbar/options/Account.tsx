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

  const handleAuthentication = () => {
    if (user) {
      signOut(auth);
    }
  };
  const userEmail = user.data?.email ? user.data?.email : null;
  const userName: string | null | undefined = userEmail
    ? userEmail.slice(0, userEmail.indexOf('@'))
    : 'Guest';

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

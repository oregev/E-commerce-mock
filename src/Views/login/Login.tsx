// Router
import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// Components
import { Alert } from '@mui/material';
// Firebase
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config';
// Assets
import amazonLogoIcon from '../../Assets/images/amazon-logo-dark.png';
// Style
import './login.css';

export const Login = (): JSX.Element => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => setEmail(e.target?.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setPassword(e.target?.value);

  const handleSignIn = (e: FormEvent<HTMLButtonElement>): void => {
    setError(null);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((authResponse) => {
        if (authResponse) {
          history.push('/');
        }
      })
      .catch((err) => setError(err.code));
  };

  const handleRegister = (e: FormEvent<HTMLButtonElement>): void => {
    setError(null);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authResponse) => {
        if (authResponse) {
          history.push('/');
        }
      })
      .catch((err) => setError(err.code));
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={amazonLogoIcon} alt="amazon logo" className="login__logo" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" value={email} onChange={handleEmailChange} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={handlePasswordChange} />
          <button type="submit" className="login__signInButton" onClick={handleSignIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON_MOCK Conditions of Use & Sale. Please see our
          Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button type="button" className="login__registerButton" onClick={handleRegister}>
          Create your Amazon Account
        </button>
      </div>
      {error && <Alert severity="error">{error}</Alert>}
    </div>
  );
};

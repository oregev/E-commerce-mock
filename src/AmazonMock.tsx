// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// Context
import { AppContextProvider } from './Context';
// Components
import Header from './Components/header';
import { Home } from './Views/home';
import { Basket } from './Views/basket';
import { Login } from './Views/login';
import { Payment } from './Views/payment/Payment';
// Styles
import './Styles/amazonMock.css';

const promise = loadStripe(
  'pk_test_51Jaej6FWhL7kaUpFgiXPiC2fkmK5xHpTMcFTV4VpaZOwnr1T4G6vN0DpRMGjtCUxJfK9GJUX8GSEgSZhLFRYI0ek00wxKrrIgt',
);

export const AmazonMock: React.FC = (): JSX.Element => (
  <div className="amazonMock">
    <AppContextProvider>
      <Router>
        <Switch>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/basket">
            <Header />
            <Basket />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </AppContextProvider>
  </div>
);

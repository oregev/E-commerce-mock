// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Context
import { AppContextProvider } from './Context';
// Components
import Header from './Components/header';
import { Home } from './Views/home';
import { Basket } from './Views/basket';
import { Login } from './Views/login';
// Styles
import './Styles/amazonMock.css';

export const AmazonMock: React.FC = (): JSX.Element => (
  <div className="amazonMock">
    <AppContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/basket">
            <Basket />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AppContextProvider>
  </div>
);

// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import { Header } from './Components/header/Header';
import { Home } from './Views/home/Home';
import { Basket } from './Views/basket/Basket';
// Styles
import './Styles/amazonMock.css';

export const AmazonMock: React.FC = (): JSX.Element => (
  <div className="amazonMock">
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/basket">
          <Basket />
        </Route>
      </Switch>
    </Router>
  </div>
);

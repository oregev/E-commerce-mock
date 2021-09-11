// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Context
import { BasketProvider } from './Context/BasketContext';
import { ProductsProvider } from './Context/ProductsContext';
// Components
import { Header } from './Components/header/Header';
import { Home } from './Views/home/Home';
import { Basket } from './Views/basket/Basket';
// Styles
import './Styles/amazonMock.css';

export const AmazonMock: React.FC = (): JSX.Element => (
  <div className="amazonMock">
    <BasketProvider>
      <ProductsProvider>
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
      </ProductsProvider>
    </BasketProvider>
  </div>
);

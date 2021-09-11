// Core
import PropTypes from 'prop-types';
// Context
import { BasketProvider } from './BasketContext';
import { ProductsProvider } from './ProductsContext';

export const CombineContexts: React.FC = (children): JSX.Element => (
  <BasketProvider>
    <ProductsProvider>{children}</ProductsProvider>
  </BasketProvider>
);

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

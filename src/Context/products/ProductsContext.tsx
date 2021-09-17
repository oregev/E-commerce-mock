// Core
import { createContext, Dispatch, useReducer } from 'react';
import PropTypes from 'prop-types';
// Types
import { ProductsState, ProductsAction } from './types';
// Reducer
import { productsReducer } from './reducer';

const initialState: ProductsState = {
  data: [],
};

export const ProductsContext = createContext<{
  products: ProductsState;
  productsDispatch: Dispatch<ProductsAction>;
}>({
  products: initialState,
  productsDispatch: () => null,
});

export const ProductsProvider: React.FC = ({ children }) => {
  const [products, productsDispatch] = useReducer(productsReducer, initialState);

  return (
    <ProductsContext.Provider
      value={{
        products,
        productsDispatch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Core
import { createContext, Dispatch, useReducer } from 'react';
import PropTypes from 'prop-types';
// Reducer
import { basketReducer } from './reducer';
// Types
import { BasketState, BasketAction } from './types';

const initialState: BasketState = {
  products: [],
  hasGift: false,
};

export const BasketContext = createContext<{
  basket: BasketState;
  basketDispatch: Dispatch<BasketAction>;
}>({
  basket: initialState,
  basketDispatch: () => null,
});

export const BasketProvider: React.FC = ({ children }) => {
  const [basket, basketDispatch] = useReducer(basketReducer, initialState);

  return (
    <BasketContext.Provider
      value={{
        basket,
        basketDispatch,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

BasketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

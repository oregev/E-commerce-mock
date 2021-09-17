// Core
import { createContext, Dispatch, useReducer } from 'react';
import PropTypes from 'prop-types';
// Reducer
import { currencyReducer } from './reducer';
// Types
import { CurrencyState, CurrencyAction } from './types';

const initialState: CurrencyState = {
  coin: '$',
};

export const CurrencyContext = createContext<{
  currency: CurrencyState;
  currencyDispatch: Dispatch<CurrencyAction>;
}>({
  currency: initialState,
  currencyDispatch: () => null,
});

export const CurrencyProvider: React.FC = ({ children }) => {
  const [currency, currencyDispatch] = useReducer(currencyReducer, initialState);

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        currencyDispatch,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

CurrencyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

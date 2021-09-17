// types
import { CurrencyAction, CurrencyActionTypes, CurrencyState } from './types';

export const currencyReducer = (state: CurrencyState, action: CurrencyAction): CurrencyState => {
  const { type, payload } = action;

  switch (type) {
    case CurrencyActionTypes.updateCurrency: {
      return {
        ...state,
        coin: payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

// Types
import { CurrencyActionTypes, CurrencyAction } from './types';

export const updateCurrency = (payload: string): CurrencyAction => ({
  type: CurrencyActionTypes.updateCurrency,
  payload,
});

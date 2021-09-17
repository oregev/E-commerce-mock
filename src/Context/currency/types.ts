export enum CurrencyActionTypes {
  updateCurrency = 'UPDATE_CURRENCY',
}

export type CurrencyAction = {
  type: CurrencyActionTypes;
  payload: string;
};

export type CurrencyState = {
  coin: string;
};

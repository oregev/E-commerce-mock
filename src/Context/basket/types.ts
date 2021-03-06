import { ProductType } from '../products';

export enum BasketActionTypes {
  addToBasket = 'ADD_PRODUCT',
  removeFromBusket = 'REMOVE_PRODUCT',
  emptyBusket = 'EMPTY_BASKET',
}

export type BasketAction = {
  type: BasketActionTypes;
  payload?: ProductType | number;
};

export type BasketState = {
  products: [] | ProductType[];
  subTotal: number;
  hasGift: boolean;
};

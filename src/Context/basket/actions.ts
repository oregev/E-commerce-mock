// Types
import { ProductType } from '../products';
import { BasketActionTypes, BasketAction } from './types';

export const addToBusket = (payload: ProductType): BasketAction => ({
  type: BasketActionTypes.addToBasket,
  payload,
});

export const removeFromBusket = (id: number): BasketAction => ({
  type: BasketActionTypes.removeFromBusket,
  payload: id,
});

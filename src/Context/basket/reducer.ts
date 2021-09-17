// types
import { ProductType } from '../products';
import { BasketState, BasketActionTypes, BasketAction } from './types';

export const basketReducer = (state: BasketState, action: BasketAction): BasketState => {
  const { type, payload } = action;

  switch (type) {
    case BasketActionTypes.addToBasket: {
      if (typeof payload !== 'number') {
        const newBasket = [payload, ...state.products];
        return {
          ...state,
          products: [...newBasket],
        };
      }
      return {
        ...state,
      };
    }
    case BasketActionTypes.removeFromBusket: {
      const newBasket = state.products?.filter((product: ProductType) => product.id !== payload);
      return {
        ...state,
        products: [...newBasket],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

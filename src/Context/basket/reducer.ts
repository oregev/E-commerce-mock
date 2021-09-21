// types
import { ProductType } from '../products';
import { BasketState, BasketActionTypes, BasketAction } from './types';

const getSubTotal = (products: ProductType[]): number =>
  products.reduce((acc: number, next: ProductType) => acc + next.price, 0);

export const basketReducer = (state: BasketState, action: BasketAction): BasketState => {
  const { type, payload } = action;

  switch (type) {
    case BasketActionTypes.addToBasket: {
      if (typeof payload !== 'number' && typeof payload !== 'undefined') {
        const newBasket = [payload, ...state.products];
        const subtotal = +getSubTotal(newBasket).toFixed(2);
        return {
          ...state,
          products: [...newBasket],
          subTotal: subtotal,
        };
      }
      return {
        ...state,
      };
    }
    case BasketActionTypes.removeFromBusket: {
      const newBasket = state.products?.filter((product: ProductType) => product.id !== payload);
      const subtotal = +getSubTotal(newBasket).toFixed(2);
      return {
        ...state,
        products: [...newBasket],
        subTotal: subtotal,
      };
    }
    case BasketActionTypes.emptyBusket: {
      return {
        ...state,
        products: [],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

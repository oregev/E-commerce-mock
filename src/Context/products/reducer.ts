// types
import { ProductsAction, ProductsActionTypes, ProductsState } from './types';

export const productsReducer = (state: ProductsState, action: ProductsAction): ProductsState => {
  const { type, payload } = action;

  switch (type) {
    case ProductsActionTypes.updateProducts: {
      return {
        ...state,
        data: payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

// Types
import { ProductsActionTypes, ProductsAction, ProductType } from './types';

export const updateProducts = (payload: ProductType[]): ProductsAction => ({
  type: ProductsActionTypes.updateProducts,
  payload,
});

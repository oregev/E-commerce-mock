export interface ProductType {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
  isInBasket: boolean;
  isButtonHidden?: boolean;
}

export enum ProductsActionTypes {
  updateProducts = 'UPDATE_PRODUCTS',
}

export type ProductsAction = {
  type: ProductsActionTypes;
  payload: ProductType[] | [];
};

export type ProductsState = {
  data: ProductType[] | [];
};

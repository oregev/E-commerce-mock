// Core
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
// Types
import { IProduct } from '../Types/product.t';

type ContextType = {
  total: number;
  hasGift: boolean;
  products: IProduct[];
  // eslint-disable-next-line no-unused-vars
  addTototal: (productPrice: number) => void;
  // eslint-disable-next-line no-unused-vars
  subtractFromTototal: (productPrice: number) => void;
  // eslint-disable-next-line no-unused-vars
  setHasGift: () => void;
  // eslint-disable-next-line no-unused-vars
  addProduct: (product: IProduct) => void;
  // eslint-disable-next-line no-unused-vars
  removeProduct: (id: number) => void;
};

const initialState: ContextType = {
  total: 0,
  hasGift: false,
  products: [],
  addTototal: () => null,
  subtractFromTototal: () => null,
  setHasGift: () => null,
  addProduct: () => null,
  removeProduct: () => null,
};

// Prepers the data layer
export const BasketContext = createContext<ContextType>(initialState);

// Wrap the app and provide the data layer
export const BasketProvider: React.FC = ({ children }) => {
  const [total, setTotal] = useState<number>(0);
  const [hasGift, setHasAGift] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const addTototal = (productPrice: number): void =>
    setTotal((currentTotal) => currentTotal + productPrice);
  const subtractFromTototal = (productPrice: number): void =>
    setTotal((currentTotal) => currentTotal - productPrice);

  const setHasGift = (): void => setHasAGift((prev) => !prev);

  const addProduct = (product: IProduct): void => setProducts([product, ...products]);
  const removeProduct = (id: number): void => {
    const newProductsList = products.filter((product) => product.id !== id);
    setProducts(newProductsList);
  };

  return (
    <BasketContext.Provider
      value={{
        total,
        hasGift,
        products,
        addTototal,
        subtractFromTototal,
        setHasGift,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

BasketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

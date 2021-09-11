// Core
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
// Types
import { IProduct } from '../Types/product.t';

export type ProductsContextType = {
  products: IProduct[];
  // eslint-disable-next-line no-unused-vars
  addProduct: (product: IProduct) => void;
  // eslint-disable-next-line no-unused-vars
  removeProduct: (id: number) => void;
};

const initialProductsState: ProductsContextType = {
  products: [],
  addProduct: () => null,
  removeProduct: () => null,
};

// Prepers the data layer
export const ProductsContext = createContext<ProductsContextType>(initialProductsState);

// Wrap the app and provide the data layer
export const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const addProduct = (product: IProduct): void => setProducts([product, ...products]);
  const removeProduct = (id: number): void => {
    const newProductsList = products.filter((product) => product.id !== id);
    setProducts(newProductsList);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

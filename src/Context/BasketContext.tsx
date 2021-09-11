// Core
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export type BasketContextType = {
  total: number;
  hasGift: boolean;
  // eslint-disable-next-line no-unused-vars
  addTototal: (productPrice: number) => void;
  // eslint-disable-next-line no-unused-vars
  subtractFromTototal: (productPrice: number) => void;
  // eslint-disable-next-line no-unused-vars
  setHasGift: () => void;
};

const initialState: BasketContextType = {
  total: 0,
  hasGift: false,
  addTototal: () => null,
  subtractFromTototal: () => null,
  setHasGift: () => null,
};

// Prepers the data layer
export const BasketContext = createContext<BasketContextType>(initialState);

// Wrap the app and provide the data layer
export const BasketProvider: React.FC = ({ children }) => {
  const [total, setTotal] = useState<number>(0);
  const [hasGift, setHasAGift] = useState<boolean>(false);

  const addTototal = (productPrice: number): void =>
    setTotal((currentTotal) => currentTotal + productPrice);
  const subtractFromTototal = (productPrice: number): void =>
    setTotal((currentTotal) => currentTotal - productPrice);

  const setHasGift = (): void => setHasAGift((prev) => !prev);

  return (
    <BasketContext.Provider
      value={{
        total,
        hasGift,
        addTototal,
        subtractFromTototal,
        setHasGift,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

BasketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

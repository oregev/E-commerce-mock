// Context
import { UserProvider } from './user';
import { ProductsProvider } from './products';
import { BasketProvider } from './basket';
import { CurrencyProvider } from './currency';
// Utils
import { combineComponents } from './CombinedComponents';

const providers = [UserProvider, ProductsProvider, BasketProvider, CurrencyProvider];

export const AppContextProvider = combineComponents(...providers);

// Network
import axios from '../Api/axios';
// Types
import { ProductType } from '../Context/products';
// Utils
import { getRandomNumber } from './numbersUtil';

export const fetchProducts = async (): Promise<ProductType[]> => {
  const url = 'products';
  try {
    const { data } = await axios.get<ProductType[]>(url);
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error fetching products', error);
  }
  return [];
};

export const getProductsPerRow = (products: ProductType[]): ProductType[][] => {
  const productsPerRow: ProductType[][] = [];
  let lastRandom = 0;
  do {
    const randomProductCount = getRandomNumber(lastRandom);
    lastRandom = randomProductCount;
    productsPerRow.push(products.splice(0, randomProductCount));
  } while (products.length > 0);
  return productsPerRow;
};

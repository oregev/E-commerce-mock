// Network
import axios from 'axios';
// Utils
import { getRandomNumber } from '../../Utils/numbersUtil';
// Types
import { IProduct } from '../../Types/product.t';

export const fetchProducts = async (): Promise<any> => {
  const url = 'http://localhost:5000/products';
  const config = { headers: { 'Access-Control-Allow-Origin': '*' } };
  try {
    const { data } = await axios.get<IProduct[]>(url, config);
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error fetching products', error);
  }
  return undefined;
};

export const getProductsPerRow = (products: IProduct[]): IProduct[][] => {
  const productsPerRow: IProduct[][] = [];
  let lastRandom = 0;
  do {
    const randomProductCount = getRandomNumber(lastRandom);
    lastRandom = randomProductCount;
    productsPerRow.push(products.splice(0, randomProductCount));
  } while (products.length > 0);
  return productsPerRow;
};

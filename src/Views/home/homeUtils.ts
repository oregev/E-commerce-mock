// Network
import axios from 'axios';
// Types
import { ProductType } from '../../Context/products';
// Utils
import { getRandomNumber } from '../../Utils/numbersUtil';

export const fetchProducts = async (): Promise<any> => {
  const url = 'http://localhost:5000/products';
  const config = { headers: { 'Access-Control-Allow-Origin': '*' } };
  try {
    const { data } = await axios.get<ProductType[]>(url, config);
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error fetching products', error);
  }
  return undefined;
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

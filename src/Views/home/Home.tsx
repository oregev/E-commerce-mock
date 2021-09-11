// Core
import { useState, useEffect } from 'react';
// Tools
import { v4 as uuidv4 } from 'uuid';
// Types
import { IProduct } from '../../Types/product.t';
// Components
import { ProductsRow } from '../../Components/products/productsRow/ProductsRow';
// Utils
import { fetchProducts, getProductsPerRow } from './homeUtils';
// Styles
import './home.css';

const IMAGE_URL =
  'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg';

export const Home: React.FC = (): JSX.Element => {
  const [rowsOfProducts, setRowsOfProducts] = useState<IProduct[][]>([]);

  const getProducts = async () => {
    const fetchedProducts: IProduct[] = await fetchProducts();
    if (fetchedProducts?.length > 0) {
      const rows = getProductsPerRow(fetchedProducts);
      setRowsOfProducts(rows);
    }
  };

  useEffect(() => {
    if (!rowsOfProducts[0]?.length) {
      getProducts();
    }
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={IMAGE_URL} alt="" />
        <div className="products__container">
          {rowsOfProducts.map((row) => (
            <ProductsRow key={uuidv4()} products={row} />
          ))}
        </div>
      </div>
    </div>
  );
};

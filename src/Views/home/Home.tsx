// Core
import { useState, useEffect, useContext } from 'react';
// Context
import { ProductsContext, updateProducts, ProductType } from '../../Context/products';
// Components
import { ProductsRow } from '../../Components/products/productsRow/ProductsRow';
// Utils
import { fetchProducts, getProductsPerRow } from '../../Utils/productsUtils';
// Assets
import AmazonBackground from '../../Assets/images/amazon-background.jpeg';
// Styles
import './home.css';

export const Home: React.FC = (): JSX.Element => {
  const { products, productsDispatch } = useContext(ProductsContext);
  const [rowsOfProducts, setRowsOfProducts] = useState<ProductType[][]>([]);

  useEffect(() => {
    if (products.data.length === 0) {
      const getProducts = async () => {
        const fetchedProducts = await fetchProducts();
        productsDispatch(updateProducts(fetchedProducts));
        const rows = getProductsPerRow(fetchedProducts);
        setRowsOfProducts(rows);
      };
      getProducts();
    }
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={AmazonBackground} alt="" />
        <div className="products__container">
          {rowsOfProducts.map((row, index) => (
            <ProductsRow key={`productRow_${index.toString()}`} products={row} />
          ))}
        </div>
      </div>
    </div>
  );
};

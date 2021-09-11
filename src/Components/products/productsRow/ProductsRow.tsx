// Types
import { IProduct } from '../../../Types/product.t';
// Components
import { Product } from '../product/Product';
// Style
import './productsRow.css';

interface IProps {
  products: IProduct[];
}

export const ProductsRow = ({ products }: IProps): JSX.Element => (
  <div className="row">
    {products.map((data, index) => (
      <Product key={index.toString()} data={data} />
    ))}
  </div>
);

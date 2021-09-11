// Core
import { useContext } from 'react';
import { ProductsContext } from '../../../Context/ProductsContext';
// Components
import { IProduct } from '../../../Types/product.t';
import { Rating } from '../../rating/Rating';
// Style
import './product.css';

interface IProps {
  data: IProduct;
}

export const Product = ({ data }: IProps): JSX.Element => {
  const { addProduct } = useContext(ProductsContext);
  const currency = '$';
  // eslint-disable-next-line no-unused-vars
  const { id, title, image, price, rating } = data;
  const handleClick = () => addProduct(data);

  return (
    <div className="product">
      <div className="product__header">
        <h3>{title}</h3>
        <span className="product__price">
          <small>{currency}</small>
          <strong>{price}</strong>
        </span>
        <Rating rating={rating} />
      </div>
      <div className="product__body">
        <img src={image} alt="" />
      </div>
      <div className="product__footer">
        <button className="product__button" type="button" onClick={handleClick}>
          Add to Basket
        </button>
      </div>
    </div>
  );
};

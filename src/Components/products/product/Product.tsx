// Core
import { useState, useEffect, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
// Context
import { addToBusket, removeFromBusket, BasketContext } from '../../../Context/basket';
import { CurrencyContext } from '../../../Context/currency';
// Types
import { ProductType } from '../../../Context/products';
// Components
import { Rating } from '../../rating/Rating';
// Style
import './product.css';

interface ProductProps {
  data: ProductType;
}

export const Product = ({ data }: ProductProps): JSX.Element => {
  const [mount, setMount] = useState(false);
  const { basketDispatch } = useContext(BasketContext);
  const { currency } = useContext(CurrencyContext);
  const { id, title, image, price, rating, isInBasket } = data;

  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  const handleAddProduct = () =>
    basketDispatch(
      addToBusket({
        ...data,
        isInBasket: true,
      }),
    );
  const handleRemoveProduct = () => basketDispatch(removeFromBusket(id));

  return (
    <CSSTransition in={mount} timeout={500} classNames="productEffect" unmountOnExit>
      <div className="product">
        <div className="product__header">
          <h3>{title}</h3>
          <span className="product__price">
            <small>{currency.coin}</small>
            <strong>{price}</strong>
          </span>
          <Rating rating={rating} />
        </div>
        <div className="product__body">
          <img src={image} alt="" />
        </div>
        <div className="product__footer">
          <button
            className="product__button"
            type="button"
            onClick={isInBasket ? handleRemoveProduct : handleAddProduct}
          >
            {isInBasket ? 'Remove from Basket' : 'Add to Basket'}
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

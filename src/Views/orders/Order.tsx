// Core
import { useState } from 'react';
// Firebase
import { DocumentData } from 'firebase/firestore';
// Formatter
import moment from 'moment';
// Types
import { ProductType } from '../../Context/products/types';
// Components
import { Product } from '../../Components/products/product/Product';

interface Props {
  data: DocumentData;
}

export const Order = ({ data }: Props): JSX.Element => {
  const [isShowList, setIsShowList] = useState<boolean>(false);

  return (
    <div className="order">
      <div className="order__header">
        <h2>Order</h2>
        <p className="order__id">N/A{/* <small>{id}</small> */}</p>
      </div>
      <div className="order__created">
        <p>{moment.unix(+data.created).format('MMMM Do YYYY, h:mma')}</p>
        <div className="order__total">${data.amount / 100}</div>
      </div>
      <button
        className="order__button"
        type="button"
        onClick={() => setIsShowList((prev) => !prev)}
      >
        {isShowList ? 'close' : 'show products'}
      </button>
      {isShowList && data && (
        <div className="order__body">
          {data.basket.products.map((product: ProductType) => {
            const productData = { ...product, isButtonHidden: true };
            return <Product data={productData} />;
          })}
        </div>
      )}
    </div>
  );
};

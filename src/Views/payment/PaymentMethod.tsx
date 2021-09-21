// Core
import { useState, useContext, useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
// Stripe
import { CardElementComponent, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';
// Firebase
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
// Web
import axios from '../../Api/axios';
import { db } from '../../Config';
// Context
import { UserContext } from '../../Context/user';
import { BasketContext } from '../../Context/basket';
import { emptyBusket } from '../../Context/basket/actions';
// Components
import { GenericModal } from '../../Components/common/genericModal/GenericModal';

export const PaymentMethod = (): JSX.Element => {
  const history = useHistory();
  const { basket, basketDispatch } = useContext(BasketContext);
  const { user } = useContext(UserContext);

  const [error, setError] = useState<string | null>(null);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [succeeded, setSucceeded] = useState<boolean>(false);
  const [processing, setProcessing] = useState<boolean | string>('');
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const stripe = useStripe();
  const elements = useElements();

  // Runs once when the app start a subsequently when basket change.
  useEffect(() => {
    const getClientSecret = async (): Promise<void> => {
      const url = `payments/create?total=${basket.subTotal * 100}`;
      setProcessing(true);
      try {
        const response = await axios.post(url);
        setClientSecret(response.data.clientSecret);
        setProcessing(false);
        setDisabled(true);
      } catch (err) {
        setError('An error');
      }
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setProcessing(true);
    if (clientSecret) {
      try {
        const payload = await stripe?.confirmCardPayment(clientSecret, {
          payment_method: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            card: elements?.getElement(CardElement),
          },
        });

        if (payload) {
          const { paymentIntent } = payload;
          const usersRef = collection(db, 'users');

          try {
            await setDoc(doc(usersRef, `${user.data?.uid}`), {
              orders: {
                basket,
                amount: paymentIntent?.amount,
                created: paymentIntent?.created,
              },
            });
          } catch (err) {
            console.log('error updating DB', err);
          }
        }

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        basketDispatch(emptyBusket());
        history.replace('/orders');
      } catch (err) {
        console.log(err);
        setError('An error');
      }
    }
  };

  const handleChange = (event: StripeCardElementChangeEvent): void => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  return (
    <>
      <div className="payment__title">
        <h3>Payment Method</h3>
      </div>
      <div className="payment__details">
        <form onSubmit={handleSubmit}>
          <CardElement onChange={handleChange} />
          <div className="payment__priceContainer">
            <h3>Order Total: ${basket.subTotal}</h3>
            <button type="submit" disabled={!!processing || disabled || succeeded}>
              <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
            </button>
          </div>
          <GenericModal isOpen={!!error} text={error} closeFunction={() => setError(null)} />
        </form>
      </div>
    </>
  );
};

// Core
import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// Stripe
import { CardElementComponent, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';
// Web
import axios from '../../Api/axios';
// Context
import { BasketContext } from '../../Context/basket';

export const PaymentMethod = (): JSX.Element => {
  const history = useHistory();
  const { basket } = useContext(BasketContext);

  const [error, setError] = useState<string | null>(null);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [succeeded, setSucceeded] = useState<boolean>(false);
  const [processing, setProcessing] = useState<boolean | string>('');
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const stripe = useStripe();
  const elements = useElements();

  // Runs once when the app start a subsequently when basket change.
  useEffect(() => {
    const getClientSecret = async () => {
      const url = `payments/create?total=${basket.subTotal * 100}`;
      setProcessing(true);
      try {
        const response = await axios.post(url);
        setClientSecret(response.data.clientSecret);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log('Error gettin secret');
      }
    };
    getClientSecret();
  }, [basket]);

  console.log('The secret is >>> ', clientSecret);

  const handleSubmit = async (event: any) => {
    // StripeCardElementChangeEvent
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
        console.log('payload ->', payload);
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        // const { paymentIntent } = payload;
        history.replace('/orders');
      } catch (submitError) {
        console.log('Error while submitting:', submitError);
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
            <button type="button" disabled={!!processing || disabled || succeeded}>
              <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
            </button>
          </div>
          {error && <div>{error}</div>}
        </form>
      </div>
    </>
  );
};

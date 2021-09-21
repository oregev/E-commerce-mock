// Core
import { useContext } from 'react';
// Context
import { UserContext } from '../../Context/user';

export const Addreas = (): JSX.Element => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="payment__title">
        <h3>Delivery Address</h3>
      </div>
      <div className="payment__address">
        <p>{user?.data?.email}</p>
        <p>123 React Lane</p>
        <p>Los Angeles, CA</p>
      </div>
    </>
  );
};

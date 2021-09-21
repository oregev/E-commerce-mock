import { useState, useEffect, useContext } from 'react';
// Firebase
import { collection, doc, getDoc, DocumentData } from 'firebase/firestore';
import { db } from '../../Config';
// Context
import { UserContext } from '../../Context/user';
// Components
import { Order } from './Order';
// Style
import './orders.css';

export const Orders = (): JSX.Element => {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState<DocumentData | null>(null);

  useEffect(() => {
    const getOrders = async () => {
      const usersRef = collection(db, 'users');
      const userDoc = doc(usersRef, `${user.data?.uid}`);

      try {
        const userOrdersSnap = await getDoc(userDoc);
        if (userOrdersSnap.exists()) {
          const userOrders = await userOrdersSnap.data();

          setOrders(Object.values(userOrders));
        }
      } catch (err) {
        console.log('error pulling from db', err);
      }
    };
    getOrders();
  }, []);

  return (
    <div className="orders">
      <h2>Your Orders</h2>
      {user && orders && orders.map((order: DocumentData) => <Order data={order} />)}
    </div>
  );
};

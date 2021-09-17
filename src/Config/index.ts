import { initializeApp } from 'firebase/app';
import { getFirestore /* , collection, getDocs */ } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './firebase';

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };

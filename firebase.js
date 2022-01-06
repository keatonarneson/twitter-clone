import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'twitter-clone-6d65c.firebaseapp.com',
  projectId: 'twitter-clone-6d65c',
  storageBucket: 'twitter-clone-6d65c.appspot.com',
  messagingSenderId: '786122266750',
  appId: '1:786122266750:web:2162f3a6159281a82f602f',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

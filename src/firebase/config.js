import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB4UNtLm1gG-_afnSj5BpIPxK41F4cKwJQ',
  authDomain: 'teach-firebase-and-firestore.firebaseapp.com',
  projectId: 'teach-firebase-and-firestore',
  storageBucket: 'teach-firebase-and-firestore.appspot.com',
  messagingSenderId: '326075475560',
  appId: '1:326075475560:web:8b0eb2094b73418b5d7ddd',
};

// init firebase
initializeApp(firebaseConfig);

// init firebase auth
const auth = getAuth();

export { auth };

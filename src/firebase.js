import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAWhEKumQIEZNpdAU_d8D4_j6KjIdaoUR8",
  authDomain: "clonedwebsites.firebaseapp.com",
  projectId: "clonedwebsites",
  storageBucket: "clonedwebsites.appspot.com",
  messagingSenderId: "403173603200",
  appId: "1:403173603200:web:1b36153edda73f4a9df365"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
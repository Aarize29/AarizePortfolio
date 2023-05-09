import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "myportfolio-2467c.firebaseapp.com",
  projectId: "myportfolio-2467c",
  storageBucket: "myportfolio-2467c.appspot.com",
  messagingSenderId: "1000516285027",
  appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
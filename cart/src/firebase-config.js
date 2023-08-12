import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPf9lU8FTKwtktGxw8WNySVA8G-IEibu8",
  authDomain: "cart-58b3e.firebaseapp.com",
  projectId: "cart-58b3e",
  storageBucket: "cart-58b3e.appspot.com",
  messagingSenderId: "344430977170",
  appId: "1:344430977170:web:ab8d4805df215c97e0864b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

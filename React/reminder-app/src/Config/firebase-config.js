import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmrIqKdjhstX1brpxN2VEhzp_AY509SMA",
  authDomain: "remainder-32872.firebaseapp.com",
  projectId: "remainder-32872",
  storageBucket: "remainder-32872.appspot.com",
  messagingSenderId: "437481104836",
  appId: "1:437481104836:web:a62749f14b3f9f65eb7091",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

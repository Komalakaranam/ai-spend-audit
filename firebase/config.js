import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-lK415X9CKd6eWaFWSNfiXzxnxOWd2RA",
  authDomain: "ai-spend-audit-d7dd5.firebaseapp.com",
  projectId: "ai-spend-audit-d7dd5",
  storageBucket: "ai-spend-audit-d7dd5.firebasestorage.app",
  messagingSenderId: "1022111214210",
  appId: "1:1022111214210:web:14c40f582d681168e2629b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
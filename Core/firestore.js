import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhunli-OwjG6h-Uv6E49wA0er8i7nTlTk",

  authDomain: "workout-app-b9d16.firebaseapp.com",

  projectId: "workout-app-b9d16",

  storageBucket: "workout-app-b9d16.appspot.com",

  messagingSenderId: "1016893464819",

  appId: "1:1016893464819:web:42d2faa3617a340cb39786",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

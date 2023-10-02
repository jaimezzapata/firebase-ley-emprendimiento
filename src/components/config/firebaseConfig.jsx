import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1EiMCBxwgLSDdNyAV27P9xqctp7nYuAs",
  authDomain: "fir-ley-emprendimiento.firebaseapp.com",
  projectId: "fir-ley-emprendimiento",
  storageBucket: "fir-ley-emprendimiento.appspot.com",
  messagingSenderId: "475664175287",
  appId: "1:475664175287:web:2d70057443a87593003d32",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
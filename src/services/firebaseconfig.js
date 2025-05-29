// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Suas configurações do Firebase aqui
const firebaseConfig = {
  apiKey: "AIzaSyBMa-H6ds8YaT3tDxDExGd7ViEadvWvppQ",
  authDomain: "easydrive-8f6b4.firebaseapp.com",
  projectId: "easydrive-8f6b4",
  storageBucket: "easydrive-8f6b4.firebasestorage.app",
  messagingSenderId: "714924314557",
  appId: "1:714924314557:web:4d7c64d63b4696d2f10cd4"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa os serviços que você vai usar
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app; 
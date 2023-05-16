// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbwVw03tVlM_cLUyTxJqS6DCjYrg5YxY8",
  authDomain: "cars-doctor-client-16acc.firebaseapp.com",
  projectId: "cars-doctor-client-16acc",
  storageBucket: "cars-doctor-client-16acc.appspot.com",
  messagingSenderId: "957865612222",
  appId: "1:957865612222:web:b417d2cdea6dae43041fef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
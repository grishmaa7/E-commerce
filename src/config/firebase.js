

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "e-commerce-9650d.firebaseapp.com",
  databaseURL: "https://e-commerce-9650d-default-rtdb.firebaseio.com",
  projectId: "e-commerce-9650d",
  storageBucket: "e-commerce-9650d.firebasestorage.app",
  messagingSenderId: "441329094394",
  appId: "1:441329094394:web:334a362cf8a2a6eae08343",
  measurementId: "G-4YMGT3F2VP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
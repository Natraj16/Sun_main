// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYSuv6c9xfDI4kmtJpN-zPINA9CuKENJw",
  authDomain: "study-genie21.firebaseapp.com",
  projectId: "study-genie21",
  storageBucket: "study-genie21.firebasestorage.app",
  messagingSenderId: "789656994070",
  appId: "1:789656994070:web:9a39e5f43c7b0f1fd15037",
  measurementId: "G-T288VGFHG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
export const db = getFirestore(app);

// Initialize Analytics (optional)
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };
export default app;
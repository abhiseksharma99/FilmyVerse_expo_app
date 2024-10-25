// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtXMoSP2lXQ_Y40z24C1JngtC_EenQW9w",
  authDomain: "expoapp-94a35.firebaseapp.com",
  projectId: "expoapp-94a35",
  storageBucket: "expoapp-94a35.appspot.com",
  messagingSenderId: "104390200970",
  appId: "1:104390200970:web:a04bff3356befbcf84e773"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
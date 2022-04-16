// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAthbUByCVX1MnBveFC8mKShDSBvoA6gpg",
  authDomain: "ema-john-simple-ten-fiftynine.firebaseapp.com",
  projectId: "ema-john-simple-ten-fiftynine",
  storageBucket: "ema-john-simple-ten-fiftynine.appspot.com",
  messagingSenderId: "844516567899",
  appId: "1:844516567899:web:9fb43ace5dd7907d98487e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
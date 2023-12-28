// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//For Authentication
import { getAuth } from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhON-1fubafid8am5MYvwXoMuHUWR1e-4",
  authDomain: "marketplace-59e34.firebaseapp.com",
  databaseURL: "https://marketplace-59e34-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "marketplace-59e34",
  storageBucket: "marketplace-59e34.appspot.com",
  messagingSenderId: "230574995338",
  appId: "1:230574995338:web:ddd2274be0aaebc3a93a73",
  measurementId: "G-FB69ZZW6KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize auth
const auth = getAuth(app);

//const analytics = getAnalytics(app);

export { app, auth };
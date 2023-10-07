// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2dk9PyZezKHgiUPynJZf5Mz-3nkfWXKE",
  authDomain: "fitness-your-career.firebaseapp.com",
  projectId: "fitness-your-career",
  storageBucket: "fitness-your-career.appspot.com",
  messagingSenderId: "518235511975",
  appId: "1:518235511975:web:9f03cce2947b7449ac0f82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

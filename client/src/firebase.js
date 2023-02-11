import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEK7L4smVpW1dTCme0NlVdpiWdQ1uCzv4",
  authDomain: "ecommerce-9cc79.firebaseapp.com",
  projectId: "ecommerce-9cc79",
  storageBucket: "ecommerce-9cc79.appspot.com",
  messagingSenderId: "898420248745",
  appId: "1:898420248745:web:2f31defd919bf5afc659b8",
  measurementId: "G-JXPPP013N6",
  // apiKey: "AIzaSyAZU0QEh11hW2yKVoCuReRPVThbe7QqeYU",
  // authDomain: "hackathon-62510.firebaseapp.com",
  // projectId: "hackathon-62510",
  // storageBucket: "hackathon-62510.appspot.com",
  // messagingSenderId: "374322364903",
  // appId: "1:374322364903:web:c36c26eb4e103f55633d42",
  // measurementId: "G-BTNHXYL33S"
};

const app = initializeApp(firebaseConfig);
export default app;

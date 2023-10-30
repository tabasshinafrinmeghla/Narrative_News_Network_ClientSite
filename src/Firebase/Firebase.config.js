// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUYYkYyKqjILdp79X8IY4dSjp9Ls52hAg",
  authDomain: "narrative-news-networks.firebaseapp.com",
  projectId: "narrative-news-networks",
  storageBucket: "narrative-news-networks.appspot.com",
  messagingSenderId: "606336855044",
  appId: "1:606336855044:web:804afc2e26b4bd42189951"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
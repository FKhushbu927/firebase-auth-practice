// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy7uk1FL8PqAvQ3YnQzUV8iU9ICjbI490",
  authDomain: "fir-auth-project-441bf.firebaseapp.com",
  projectId: "fir-auth-project-441bf",
  storageBucket: "fir-auth-project-441bf.appspot.com",
  messagingSenderId: "524965714585",
  appId: "1:524965714585:web:feb5dbf22e00fa1ca2f608",
  measurementId: "G-D9D4TF7LM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
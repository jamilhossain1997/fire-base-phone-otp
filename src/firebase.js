
import { initializeApp } from "firebase/app";
import "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDDx2NdHXg7JfMZm9gpnTIYqc81bsAwHHc",
  authDomain: "phone-otp-7555f.firebaseapp.com",
  projectId: "phone-otp-7555f",
  storageBucket: "phone-otp-7555f.appspot.com",
  messagingSenderId: "245382269341",
  appId: "1:245382269341:web:ba217672d95c7fd9808774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=firebase.auth();
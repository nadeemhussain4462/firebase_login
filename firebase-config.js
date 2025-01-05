// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8RdS0_p0fCNI9WsgV9f8WPcePQFxnA74",
    authDomain: "fir-login-69815.firebaseapp.com",
    projectId: "fir-login-69815",
    storageBucket: "fir-login-69815.firebasestorage.app",
    messagingSenderId: "82597005017",
    appId: "1:82597005017:web:29f3f4c502a3fc9a4c60c8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

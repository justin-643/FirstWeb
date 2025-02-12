// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";  // Import Firebase Auth

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmZxIfPoihVoYhaL2hATfTmGPUt3_nFxg",
  authDomain: "healthcare-rehab-188e7.firebaseapp.com",
  databaseURL: "https://healthcare-rehab-188e7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "healthcare-rehab-188e7",
  storageBucket: "healthcare-rehab-188e7.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "1:604782605786:web:4831316c06f5ffb6a03ce3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);  // Initialize Firebase Auth

// Export database, auth, ref, and set for use in other parts of your app
export { database, ref, set, auth };

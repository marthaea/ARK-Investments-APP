// Import the necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCPuaCqExNagHPhWSX3suHi-E2d92NPrZI",
  authDomain: "ark-investments-6d738.firebaseapp.com",
  projectId: "ark-investments-6d738",
  storageBucket: "ark-investments-6d738.appspot.com", // Corrected `storageBucket` URL
  messagingSenderId: "252040147048",
  appId: "1:252040147048:web:3670406e426f9aaf740bdd",
  measurementId: "G-LVQS8VWC0L" // For Google Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
const auth = getAuth(app); // For authentication
const db = getFirestore(app); // For Firestore database
const storage = getStorage(app); // For Firebase storage

// Export the services
export { auth, db, storage };

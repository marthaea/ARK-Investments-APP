// services/userService.js
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

// Create or update a user profile
export const createUserProfile = async (userId, profileData) => {
  try {
    await setDoc(doc(db, "users", userId), profileData, { merge: true });
    console.log("User profile created/updated");
  } catch (error) {
    console.error("Error creating/updating profile:", error.message);
    throw error;
  }
};

// Fetch a user profile
export const fetchUserProfile = async (userId) => {
  try {
    const docSnap = await getDoc(doc(db, "users", userId));
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No profile found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching profile:", error.message);
    throw error;
  }
};

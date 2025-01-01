import React, { useEffect, useState } from "react";
import { fetchUserProfile, createUserProfile } from "./userservice";
import { auth } from "./firebase";
import "./profile.css"; // Import the external CSS

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);
      try {
        const userId = auth.currentUser?.uid;
        if (userId) {
          const userProfile = await fetchUserProfile(userId);
          setProfile(userProfile);
        }
      } catch (err) {
        setError("Failed to load profile");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const handleUpdateProfile = async () => {
    const userId = auth.currentUser?.uid;
    if (userId) {
      try {
        await createUserProfile(userId, { ...profile });
        alert("Profile updated!");
      } catch (err) {
        setError("Failed to update profile");
        console.error(err);
      }
    }
  };

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="profile-page">
      <div className="profile-overlay"></div> {/* Green overlay */}
      <div className="profile-container">
        <h1>Profile</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdateProfile();
          }}
        >
          <label>
            Name:
            <input
              type="text"
              value={profile?.name || ""}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </label>
          <br />
          <label>
            Email:
            <input 
              type="email" 
              value={profile?.email || ""}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </label>
          <br />
          <button type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

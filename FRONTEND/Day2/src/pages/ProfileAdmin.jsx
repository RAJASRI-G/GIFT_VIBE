import React, { useState } from 'react';
import '../assets/css/Profile.css';
import Pro from "../assets/images/profile1.jpg"
const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    about: 'I am Admin',
  });

  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    // You can add logic here to save the updated profile information to a server or local storage.
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="profile-container">
      <div className="profile-top">
        {/* Replace the placeholder URL with your actual image URL */}
        <div className="profile-image">
        <img src={Pro} alt="Profile" />
        </div>
        <h1 className="profile-name">{profile.name}</h1>
      </div>
      <div className="profile-details">
        <div className="detail-item">
          <label className="detail-label">Name</label>
          {editMode ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              className="detail-input"
            />
          ) : (
            <span className="detail-value">{profile.name}</span>
          )}
        </div>
        <div className="detail-item">
          <label className="detail-label">Email</label>
          {editMode ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="detail-input"
            />
          ) : (
            <span className="detail-value">{profile.email}</span>
          )}
        </div>
        <div className="detail-item">
          <label className="detail-label">Phone</label>
          {editMode ? (
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              className="detail-input"
            />
          ) : (
            <span className="detail-value">{profile.phone}</span>
          )}
        </div>
        <div className="detail-item">
          <label className="detail-label">About</label>
          {editMode ? (
            <textarea
              name="about"
              value={profile.about}
              onChange={handleInputChange}
              className="detail-input"
            />
          ) : (
            <span className="detail-value">{profile.about}</span>
          )}
        </div>
        <div className="profile-header">
       
        <button onClick={handleEditClick} className="edit-button">
          Edit
        </button>
        {editMode && (
          <button onClick={handleSaveClick} className="save-button">
            Save
          </button>
        )}
      </div>
      </div>
    </div>
  );
};

export default ProfilePage;

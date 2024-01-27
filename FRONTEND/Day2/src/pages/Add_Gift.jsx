import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Add_Gift.css';

const GiftPage = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    orderDate: '',
    address: '',
    phoneNumber: '',
    email: '',
    selectedGift: '',
    selectedTheme: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;
     if (name === 'phoneNumber') {
      updatedValue = value.replace(/\D/g, '');

      if (updatedValue.length > 3) {
        if (updatedValue.length <= 6) {
          updatedValue = `(${updatedValue.slice(0, 3)}) ${updatedValue.slice(3)}`;
        } else if (updatedValue.length <= 10) {
          updatedValue = `(${updatedValue.slice(0, 3)}) ${updatedValue.slice(3, 6)}-${updatedValue.slice(6)}`;
        } else {
          updatedValue = `(${updatedValue.slice(0, 3)}) ${updatedValue.slice(3, 6)}-${updatedValue.slice(6, 10)}`;
        }
      }
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/show-details', { state: { formData } });
    console.log(formData);
  };

  return (
    <div className="gifthead">
    <div className="gift-page">
    <h1 className="page-title">Enter your details</h1>
    <form onSubmit={handleSubmit} className="gift-form">
        <div className="left-column">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name..."
              className="form-input"
              required
              />
          </div>
          <div className="form-group">
          <label className="form-label">Order Date (dd-mm-yyyy)</label>
          <input
            type="date"
            name="orderDate"
            value={formData.orderDate}
            onChange={handleInputChange}
            pattern="(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}"
            title="Please enter a date in the format dd-mm-yyyy"
            placeholder="dd-mm-yyyy"
            className="form-input"
            required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Address:</label>
            <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address..."
            className="form-input"
            required
            />
          </div>
          <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              maxLength="14" // Limit the input length to the formatted format
              placeholder="(XXX) XXX-XXXX"
              className="form-input"
              required
              />
          </div>
        </div>
        <div className="right-column">
          <div className="form-group">
          <label className="form-label">Email Id</label>
          <input
          type="email"
          name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email..."
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
          <label className="form-label">Select Gift</label>
          <select
          name="selectedGift"
          value={formData.selectedGift}
          onChange={handleInputChange}
          className="form-select"
          required
          >
              <option value="">Select a gift</option>
              <option value="Gift 1">Gift 1</option>
              <option value="Gift 2">Gift 2</option>
              <option value="Gift 3">Gift 3</option>
              {/* Add more options for gifts as needed */}
              </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Select Theme</label>
            <select
            name="selectedTheme"
            value={formData.selectedTheme}
            onChange={handleInputChange}
            className="form-select"
            required
            >
            <option value="">Select a theme</option>
            <option value="Theme 1">Theme 1</option>
            <option value="Theme 2">Theme 2</option>
              <option value="Theme 3">Theme 3</option>
              {/* Add more options for themes as needed */}
            </select>
          </div>
        </div>
        <button type="submit" className="form-button">Place Order</button>
        </form>
    </div>
    </div>
  );
};

export default GiftPage;

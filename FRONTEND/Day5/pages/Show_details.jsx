import React from 'react';
import "../assets/css/Show_details.css";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const ShowDetailsPage = () => {
  const location = useLocation();
  const formData = location.state.formData;

  const handlePay = () => {
    // Handle pay functionality
  };

  const handleCancel = () => {
    // Handle cancel order functionality
  };

  return (
    <div className="show-details-page">
      <h1 className="page-title">Order Details</h1>
      <table className="details-table">
        <thead>
          <tr>
            {Object.keys(formData).map((label, index) => (
              <th key={index}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(formData).map((data, index) => (
              <td key={index}>{data || "N/A"}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <div className="buttons-container">
        <Link to="/orders" className="pay-button" onClick={handlePay}>Pay</Link>
        <Link to="/orders" className="cancel-button" onClick={handleCancel}>Cancel Order</Link>
      </div>
    </div>
  );
};

export default ShowDetailsPage;

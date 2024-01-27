import React from 'react';
import "../assets/css/Show_details.css"
import { useLocation } from 'react-router-dom';
import {Link} from "react-router-dom";
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
            <th>Label</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{formData?.name || "N/A"}</td>
          </tr>
          <tr>
            <td>Order Date</td>
            <td>{formData?.orderDate || "N/A"}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{formData?.address || "N/A"}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>{formData?.phoneNumber || "N/A"}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{formData?.email || "N/A"}</td>
          </tr>
          <tr>
            <td>Selected Gift</td>
            <td>{formData?.selectedGift || "N/A"}</td>
          </tr>
          <tr>
            <td>Selected Theme</td>
            <td>{formData?.selectedTheme || "N/A"}</td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <br></br>
      <div className="buttons-container">
      <Link to="/orders"className="pay-button">Pay</Link>
      <Link to="/orders"className="cancel-button">Cancel Order
      </Link>
      </div>
    </div>
  );
};

export default ShowDetailsPage;

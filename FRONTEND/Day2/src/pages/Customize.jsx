import React from 'react';
import { useLocation } from 'react-router-dom';
import "../assets/css/Customize.css"
const Customize = () => {
  const location = useLocation();
  const productDetails = location.state;
  return (
    <div className="details-container">
      <div className="details-left">
        <div className="detail-row">
          <img src={productDetails.image} alt="Image 1" />
        </div>
        <div className="detail-row">
          <img src={productDetails.image} alt="Image 2" />
        </div>
        <div className="detail-row">
          <img src={productDetails.image} alt="Image 3" />
        </div>
        <div className="detail-row">
          <img src={productDetails.image} alt="Image 4" />
        </div>
      </div>
      <div className="details-center">
        <img src={productDetails.image} alt={productDetails.description} />
      </div>
      <div className="details-right">
        <div className="description">{productDetails.discount}</div>
        {/* Render other details about the picture on the right side */}
      </div>
    </div>
  );
};

export default Customize;

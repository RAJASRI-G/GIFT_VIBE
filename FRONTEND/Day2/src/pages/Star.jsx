import React from 'react';
import "../assets/css/Star.css"; // Import your CSS file
import a from "../assets/images/star2.webp"; // Import your CSS file
import b from "../assets/images/memory.jpg"; // Import your CSS file
import c from "../assets/images/lyrics.jpg"; // Import your CSS file
import d from "../assets/images/quote.webp"; // Import your CSS file
import e from "../assets/images/spotify.webp"; // Import your CSS file
import f from "../assets/images/wall.jpg"; // Import your CSS file
import g from "../assets/images/ch2.jpg"; // Import your CSS file
import h from "../assets/images/mem4.jpg"; // Import your CSS file
import { Link } from 'react-router-dom';
const Star = () => {
  // Sample data for demonstration
  const products = [
    { id: 1,image: a, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 4, rate: '$50', discount: '20%' },
    { id: 2, image: b, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 5, rate: '$60', discount: '30%' },
    { id: 3, image: c, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 4, rate: '$50', discount: '20%' },
    { id: 4, image: d, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 5, rate: '$60', discount: '30%' },
    { id: 5, image: e, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 4, rate: '$50', discount: '20%' },
    { id: 6, image: f, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 5, rate: '$60', discount: '30%' },
    { id: 7, image: g, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 4, rate: '$50', discount: '20%' },
    { id: 8, image: h, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 5, rate: '$60', discount: '30%' },
    // Add more product data as needed
  ];

  // Function to render the discount badge randomly
  const renderDiscountBadge = () => {
    const randomDiscounts = ['10%', '20%', '30%', '40%'];
    return randomDiscounts[Math.floor(Math.random() * randomDiscounts.length)];
  };

  return (
    <div className="star-page">
      <h1 className="star-title"><br></br></h1>
      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id} className="grid-item">
            <img src={product.image} alt={product.description} />
            <div className="description">{product.description}</div>
            <div className="rating">
            {Array.from({ length: product.rating }, (_, index) => (
                <span key={index}>&#9733;</span> // Render rating stars
                ))}
                </div>
                <div className="crackle-border">
                <div className="discount-badge" data-discount={product.discount}> </div>
                </div>
                <div className="rate">{product.rate}</div>
                <Link to="/cust" className="custom-button">See Customize options</Link>
                </div>
        ))}
      </div>
    </div>
  );
};

export default Star;

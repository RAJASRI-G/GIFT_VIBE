
import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import "../assets/css/Customize.css"; 

const Customize = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  const productDetails = location.state.productDetails;
  const handleAddToCart = () => {
    // Get existing cart items from localStorage
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Add new item to cart
    const updatedCartItems = [...existingCartItems, productDetails];
    
    // Save updated cart items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    
    // Navigate to the "Add to Cart" page
    navigate('/cart', { state: { updatedCartItems } });
  };
  // Generate random values for reviews and time left
  const randomReviews = Math.floor(Math.random() * 1000); // Random number between 0 and 999
  const randomTimeLeft = Math.floor(Math.random() * 24) + 1; // Random number between 1 and 24

  return (
    <div className="details-container">
    <div className="details-left">
    <div className="detail-row">
      <img src={productDetails.image} alt="Image 1" />
    </div>
    {/* Add similar divs for other images if needed */}
    <p className="prev" >❮</p>
      <p className="next">❯</p>
  </div>
      <div className="details-center">
        <img src={productDetails.image} /><br></br>
        <img src={productDetails.image} /><br></br>
        <img src={productDetails.image} /><br></br>
        <img src={productDetails.image} />
      </div>
      <div className="details-right">
        <div className="description1">{productDetails.description}</div>
        <div className="rating">Rating: {productDetails.rating}</div>
        <div className="rate">Rate: {productDetails.rate}</div>
        <div className="reviews">Reviews: {randomReviews}</div>
        <div className="time-left">Time Left: {randomTimeLeft} hours</div>
        <div className="discount">Discount: {productDetails.discount}</div>
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Customize;






// import React, { useState } from 'react';
// import { useNavigate,useLocation } from 'react-router-dom';
// import "../assets/css/Customize.css"; 

// const Customize = () => {
//   const navigate = useNavigate(); 
//   const location = useLocation();
//   const productDetails = location.state.productDetails;
//   const handleAddToCart = () => {
//     // Logic to add the product to the cart
//     // You can implement this logic based on your application's requirements
//     console.log('Product added to cart:', productDetails);

//     // Navigate to the "Add to Cart" page
//     navigate('/cart', { state: { productDetails } });
//   };
//   // Generate random values for reviews and time left
//   const randomReviews = Math.floor(Math.random() * 1000); // Random number between 0 and 999
//   const randomTimeLeft = Math.floor(Math.random() * 24) + 1; // Random number between 1 and 24

//   return (
//     <div className="details-container">
//     <div className="details-left">
//     <div className="detail-row">
//       <img src={productDetails.image} alt="Image 1" />
//     </div>
//     {/* Add similar divs for other images if needed */}
//     <p className="prev" >❮</p>
//       <p className="next">❯</p>
//   </div>
//       <div className="details-center">
//         <img src={productDetails.image} /><br></br>
//         <img src={productDetails.image} /><br></br>
//         <img src={productDetails.image} /><br></br>
//         <img src={productDetails.image} />
//       </div>
//       <div className="details-right">
//         <div className="description1">{productDetails.description}</div>
//         <div className="rating">Rating: {productDetails.rating}</div>
//         <div className="rate">Rate: {productDetails.rate}</div>
//         <div className="reviews">Reviews: {randomReviews}</div>
//         <div className="time-left">Time Left: {randomTimeLeft} hours</div>
//         <div className="discount">Discount: {productDetails.discount}</div>
//         <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// export default Customize;




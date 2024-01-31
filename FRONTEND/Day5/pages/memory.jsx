import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import CSS files and images
import "../assets/css/star.css";
import "../assets/css/memory.css";
import a from "../assets/images/mem1.jpg";
import b from "../assets/images/mem2.jpg";
import c from "../assets/images/mem3.avif";
import d from "../assets/images/mem4.jpg";
import e from "../assets/images/mem5.jpg";
import f from "../assets/images/mem6.avif";
import g from "../assets/images/mem7.jpeg";
import h from "../assets/images/mem8.webp";

const Star = () => {
  const navigate = useNavigate();
  const products = [
    { id: 1, image: a, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 4, rate: '$50', discount: '20%',linkTo: '/cust' },
    { id: 2, image: b, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 5, rate: '$60', discount: '30%',linkTo: '/cust' },
    { id: 3, image: c, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 4, rate: '$50', discount: '20%',linkTo: '/cust' },
    { id: 4, image: d, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 5, rate: '$60', discount: '30%' ,linkTo: '/cust' },
    { id: 5, image: e, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 4, rate: '$50', discount: '20%',linkTo: '/cust' },
    { id: 6, image: f, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 5, rate: '$60', discount: '30%',linkTo: '/cust' },
    { id: 7, image: g, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 4, rate: '$50', discount: '20%',linkTo: '/cust' },
    { id: 8, image: h, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 5, rate: '$60', discount: '30%',linkTo: '/cust' },
  ];

  const handleOnClick = (product) => {
    navigate('/cust', { state: { productDetails: product } });
  };

  return (
    <div className="star-page">
      <h1 className="memory-title"><br /></h1>
      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id} className="grid-item">
            <img src={product.image} alt={product.description} />
            <div className="description">{product.description}</div>
            <div className="rating">
              {/* Render rating stars */}
              {Array.from({ length: product.rating }, (_, index) => (
                <span key={index}>&#9733;</span>
              ))}
            </div>
            <div className="crackle-border">
              <div className="discount-badge" data-discount={product.discount}></div>
            </div>
            <div className="rate">{product.rate}</div>
            {/* Pass product to handleOnClick function */}
            <button type="button" className="custom-button" onClick={() => handleOnClick(product)}>See Customize options</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Star;



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import "../assets/css/star.css"; // Import your CSS file
// import "../assets/css/memory.css"; // Import your CSS file
// import a from "../assets/images/mem1.jpg"; // Import your CSS file
// import b from "../assets/images/mem2.jpg"; // Import your CSS file
// import c from "../assets/images/mem3.avif"; // Import your CSS file
// import d from "../assets/images/mem4.jpg"; // Import your CSS file
// import e from "../assets/images/mem5.jpg"; // Import your CSS file
// import f from "../assets/images/mem6.avif"; // Import your CSS file
// import g from "../assets/images/mem7.jpeg"; // Import your CSS file
// import h from "../assets/images/mem8.webp"; // Import your CSS file
// const Star = () => {
//   const navigate = useNavigate();
//   // Sample data for demonstration
//   const products = [
//     { id: 1,image: a, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 4, rate: '$50', discount: '20%' },
//     { id: 2, image: b, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 5, rate: '$60', discount: '30%' },
//     { id: 3, image: c, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 4, rate: '$50', discount: '20%' },
//     { id: 4, image: d, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 5, rate: '$60', discount: '30%' },
//     { id: 5, image: e, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 4, rate: '$50', discount: '20%' },
//     { id: 6, image: f, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 5, rate: '$60', discount: '30%' },
//     { id: 7, image: g, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 4, rate: '$50', discount: '20%' },
//     { id: 8, image: h, description: 'Star maps are more commonly referred to as star charts or celestial maps.', rating: 5, rate: '$60', discount: '30%' },
//     // Add more product data as needed
//   ];
//   const handleOnClick = (product) => {
//     navigate('/cust', { state: { productDetails: product } });
//   };
//   // Function to render the discount badge randomly
//   const renderDiscountBadge = () => {
//     const randomDiscounts = ['10%', '20%', '30%', '40%'];
//     return randomDiscounts[Math.floor(Math.random() * randomDiscounts.length)];
//   };

//   return (
//     <div className="star-page">
//       <h1 className="memory-title"><br></br></h1>
//       <div className="grid-container">
//         {products.map((product) => (
//           <div key={product.id} className="grid-item">
//             <img src={product.image} alt={product.description} />
//             <div className="description">{product.description}</div>
//             <div className="rating">
//             {Array.from({ length: product.rating }, (_, index) => (
//                 <span key={index}>&#9733;</span> // Render rating stars
//                 ))}
//                 </div>
//                 <div className="crackle-border">
//                 <div className="discount-badge" data-discount={product.discount}> </div>
//                 </div>
//                 <div className="rate">{product.rate}</div>
//                 <button type="button" className="custom-button" onClick={() => handleOnClick(product)}>See Customize options</button>
//                 </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Star;




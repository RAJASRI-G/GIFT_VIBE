import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../assets/css/Cart.css";

const CartPage = () => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleDelete = (itemToDelete) => {
    // Filter out the item to be deleted from cart items
    const updatedCartItems = cartItems.filter(item => item !== itemToDelete);
    
    // Update state and localStorage with the updated cart items
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    console.log('Item deleted from cart:', itemToDelete);
  };

  const handleOrder = () => {
    console.log('Order placed:', cartItems);
  };

  return (
    <div className="cart-container">
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <div className="cart-image">
            <img src={item.image} alt="Product" />
          </div>
          <div className="cart-description">
            <div>{item.description}</div>
            <div>Rate: {item.rate}</div>
            <div>
              Quantity:
              <button onClick={decrementQuantity}>-</button>
              {quantity}
              <button onClick={incrementQuantity}>+</button>
            </div>
            <div>Price: ${(parseFloat(item.rate.substring(1)) * quantity).toFixed(2)}</div>
            <button className="del" onClick={() => handleDelete(item)}>Delete</button>
            <button className="ord" onClick={handleOrder}>Pay</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPage;


// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import "../assets/css/Cart.css";

// const CartPage = () => {
//   const location = useLocation();
//   const productDetails = location.state.productDetails;

//   const [quantity, setQuantity] = useState(1);

//   const incrementQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleDelete = () => {
//     console.log('Item deleted from cart:', productDetails);
//   };

//   const handlePlaceOrder = () => {
//     console.log('Order placed:', productDetails);
//   };

//   return (
//     <div className="cart-item">
//       <div className="cart-image">
//         <img src={productDetails.image} alt="Product" />
//       </div>
//       <div className="cart-description">
//         <div>{productDetails.description}</div>
//         <div>Rate: {productDetails.rate}</div>
//         <div>
//           Quantity:
//           <button onClick={decrementQuantity}>-</button>
//           {quantity}
//           <button onClick={incrementQuantity}>+</button>
//         </div>
//         <div>Price: {productDetails.rate * quantity}</div>
//         <button onClick={handleDelete}>Delete</button>
//         <button onClick={handlePlaceOrder}>Place Order</button>
        
//       </div>
//     </div>
//   );
// };

// export default CartPage;

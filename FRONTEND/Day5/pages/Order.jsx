import React from 'react';
import "../assets/css/Order.css";

const OrderDetails = () => {
  // Example order details
  const orders = [
    { orderId: 1, userId: 'user123', giftName: 'Frame', themeName: 'Birthday', price: '$25' },
    { orderId: 2, userId: 'user456', giftName: 'Custom Mug', themeName: 'Anniversary', price: '$15' },
    { orderId: 3, userId: 'user789', giftName: 'Photo Album', themeName: 'Graduation', price: '$35' },
  ];

  return (
    <div className="order-container">
      <h2 className='ord'>Order Details</h2><br></br>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Gift Name</th>
            <th>Theme Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.orderId} className={`order-details-${order.orderId} order-box`}>
              <td>{order.orderId}</td>
              <td>{order.userId}</td>
              <td>{order.giftName}</td>
              <td>{order.themeName}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;

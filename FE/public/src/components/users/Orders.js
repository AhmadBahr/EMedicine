import React from 'react';

export default function Orders() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">My Orders</h1>
      <div className="list-group">
        {/* Example order item */}
        <div className="list-group-item">
          <h5 className="mb-1">Order #1234</h5>
          <p className="mb-1">Status: Shipped</p>
          <small>Order Date: July 20, 2024</small>
        </div>
        {/* Add more order items here */}
      </div>
    </div>
  );
}

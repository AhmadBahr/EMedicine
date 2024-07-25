import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const orders = [
    { id: 1, customer: "John Doe", date: "2024-07-22", status: "Shipped" },
    { id: 2, customer: "Jane Smith", date: "2024-07-21", status: "Processing" },
    { id: 3, customer: "Bob Johnson", date: "2024-07-20", status: "Delivered" },
];

export default function AdminOrders() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h2>Admin Orders</h2>
                        </div>
                        <div className="card-body">
                            <div className="mb-4">
                                <h4>Order List</h4>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Customer</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map(order => (
                                                <tr key={order.id}>
                                                    <td>{order.id}</td>
                                                    <td>{order.customer}</td>
                                                    <td>{order.date}</td>
                                                    <td>{order.status}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

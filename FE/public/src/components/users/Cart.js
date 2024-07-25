import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h3 className="card-title">Shopping Cart</h3>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Medicine Name 1</td>
                                        <td>$10.00</td>
                                        <td>2</td>
                                        <td>$20.00</td>
                                        <td>
                                            <button className="btn btn-warning btn-sm">Remove</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Medicine Name 2</td>
                                        <td>$15.00</td>
                                        <td>1</td>
                                        <td>$15.00</td>
                                        <td>
                                            <button className="btn btn-warning btn-sm">Remove</button>
                                        </td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                            <div className="d-flex justify-content-between mt-4">
                                <h4>Total: $35.00</h4>
                                <button className="btn btn-primary">Proceed to Checkout</button>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-secondary">Continue Shopping</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'; 

export default function Dashboard() {
    const user = JSON.parse(localStorage.getItem('user'));
    const userName = user ? user.name : 'User';

    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h1 className="card-title">User Dashboard</h1>
                            </div>
                            <div className="card-body">
                                <h4>Welcome, {userName}!</h4>
                                <p className="card-text">
                                    This is your dashboard. Here you can manage your account, view your activities, and access various features.
                                </p>
                                <div className="mt-3">
                                    <h5>Recent Activities</h5>
                                    <ul className="list-group">
                                        <li className="list-group-item">Activity 1: Updated Profile</li>
                                        <li className="list-group-item">Activity 2: Made a Purchase</li>
                                        <li className="list-group-item">Activity 3: Reviewed a Product</li>
                                    </ul>
                                </div>
                                <div className="mt-4">
                                    <h5>Quick Links</h5>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h6 className="card-title">Profile</h6>
                                                    <p className="card-text">View and edit your profile information.</p>
                                                    <a href="/profile" className="btn btn-primary">Go to Profile</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h6 className="card-title">Orders</h6>
                                                    <p className="card-text">Review your recent orders.</p>
                                                    <a href="/myorders" className="btn btn-primary">View Orders</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h6 className="card-title">Cart</h6>
                                                    <p className="card-text">Check your cart and proceed to checkout.</p>
                                                    <a href="/cart" className="btn btn-primary">View Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-secondary" onClick={() => localStorage.removeItem('user')}>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

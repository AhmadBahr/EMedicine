import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHeader from "./AdminHeader";

export default function AdminDashboard() {
    return (
        
        <div className="container mt-5">
            <AdminHeader/>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h2>Admin Dashboard</h2>
                        </div>
                        <div className="card-body">
                            <h4>Welcome, Admin!</h4>
                            <p>Here are some quick stats and links to get you started:</p>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">Total Orders</h5>
                                            <p className="card-text">1234</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">Total Customers</h5>
                                            <p className="card-text">567</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">Total Medicines</h5>
                                            <p className="card-text">89</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h5>Quick Links</h5>
                                <ul className="list-group">
                                    <li className="list-group-item"><a href="/adminorders">View Orders</a></li>
                                    <li className="list-group-item"><a href="/customers">Manage Customers</a></li>
                                    <li className="list-group-item"><a href="/medicine">Manage Medicines</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

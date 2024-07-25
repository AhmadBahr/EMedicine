import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const customers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", registered: "2024-07-15" },
    { id: 2, name: "Michael Brown", email: "michael@example.com", registered: "2024-06-25" },
    { id: 3, name: "Sarah Wilson", email: "sarah@example.com", registered: "2024-07-05" },
];

export default function CustomerList() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h2>Customer List</h2>
                        </div>
                        <div className="card-body">
                            <div className="mb-4">
                                <h4>Customer Details</h4>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Registered Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {customers.map(customer => (
                                                <tr key={customer.id}>
                                                    <td>{customer.id}</td>
                                                    <td>{customer.name}</td>
                                                    <td>{customer.email}</td>
                                                    <td>{customer.registered}</td>
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

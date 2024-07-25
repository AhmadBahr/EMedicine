import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const medicines = [
    { id: 1, name: "Aspirin", manufacturer: "PharmaCo", unitPrice: "$10.00", quantity: 50 },
    { id: 2, name: "Tylenol", manufacturer: "HealthCorp", unitPrice: "$12.00", quantity: 30 },
    { id: 3, name: "Advil", manufacturer: "MediTech", unitPrice: "$8.00", quantity: 100 },
];

export default function Medicine() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h2>Medicine List</h2>
                        </div>
                        <div className="card-body">
                            <div className="mb-4">
                                <h4>Available Medicines</h4>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Manufacturer</th>
                                                <th>Unit Price</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {medicines.map(medicine => (
                                                <tr key={medicine.id}>
                                                    <td>{medicine.id}</td>
                                                    <td>{medicine.name}</td>
                                                    <td>{medicine.manufacturer}</td>
                                                    <td>{medicine.unitPrice}</td>
                                                    <td>{medicine.quantity}</td>
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

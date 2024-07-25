import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import placeholderImage from '../../assets/icon_1.jpg';

const medicines = [
    { id: 1, name: 'Medicine 1', price: '$10.00', description: 'Description for medicine 1' },
    { id: 2, name: 'Medicine 2', price: '$15.00', description: 'Description for medicine 2' },
    { id: 3, name: 'Medicine 3', price: '$20.00', description: 'Description for medicine 3' },
    // Add more medicines as needed
];

export default function MedicineDisplay() {
    return (
        <div className="container mt-5">
            <div className="row">
                {medicines.map(medicine => (
                    <div className="col-md-4 mb-4" key={medicine.id}>
                        <div className="card">
                            <img src={placeholderImage} alt={medicine.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{medicine.name}</h5>
                                <p className="card-text">{medicine.description}</p>
                                <p className="card-text"><strong>Price: {medicine.price}</strong></p>
                                <a href="#" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

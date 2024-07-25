import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from '../../assets/icon_1.jpg'; 
export default function Profile() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>My Profile</h3>
            </div>
            <div className="card-body">
              <div className="text-center mb-4">
                <img src={profilePic} alt="Profile" className="img-fluid rounded-circle" style={{ width: '150px', height: '150px' }} />
              </div>
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" value="John Doe" readOnly />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" value="john.doe@example.com" readOnly />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" className="form-control" id="phone" value="123-456-7890" readOnly />
                </div>
                <div className="text-center">
                  <button type="button" className="btn btn-primary">Edit Profile</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

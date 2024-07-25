import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon_1 from '../src/assets/icon_1.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    // For example, you can check credentials or make an API request

    // Assuming login is successful, redirect to the dashboard
    navigate('/Dashboard');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>E-Medicine Login</h3>
            </div>
            <div className="card-body">
              <div className="text-center mb-4">
                <img src={icon_1} alt="Medicine" className="img-fluid" />
              </div>
              <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember Me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
                <div className="mt-3 text-center">
                  <a href="/forgot-password">Forgot Password?</a>
                </div>
              </form>
              <div className="mt-3 text-center">
                <p>Or login with:</p>
                <button className="btn btn-primary w-100 mb-2">Facebook</button>
                <button className="btn btn-primary w-100">Twitter</button>
              </div>
              <div className="mt-3 text-center">
                <p>Don't have an account?</p>
                <button
                  className="btn btn-secondary w-100"
                  onClick={() => navigate('/registration')}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

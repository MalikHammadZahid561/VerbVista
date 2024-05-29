import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);  // State to track login success
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent the form from being submitted traditionally

    const loginUrl = 'https://verb-vista-backend-ten.vercel.app/api/v2/user/login-user';
    const payload = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post(loginUrl, payload);
      console.log('Login Successful:', response.data);
      setLoginSuccess(true);  // Update state to indicate success
      setTimeout(() => {
        navigate('/home');  // Redirect after showing message
      }, 2000);  // Delay for 2 seconds to show message
    } catch (error) {
      console.error('Login Failed:', error.response || error.message);
      setLoginSuccess(false);  // Ensure login success is false on failure
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="text-center">
              Not registered yet?{" "}
              <Link to='/register' className="link-primary">
                Register 
              </Link>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {loginSuccess && (
            <div className="alert alert-success mt-2" style={{ backgroundColor: '#d4edda' }}>
              Login Successful
            </div>
          )}
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

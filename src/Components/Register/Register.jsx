import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const navigate =useNavigate()

  const handleRegister = async (event) => {
    event.preventDefault(); // Prevent the form from being submitted traditionally
    if (!validateForm()) return; // Stop the submission if the validation fails

    const registerUrl = 'https://verb-vista-backend.vercel.app/api/v2/user/create-user';
    const payload = {
      name: fullName,
      email: email,
      password: password
    };

    try {
      const response = await axios.post(registerUrl, payload);
      console.log('Registration Successful:', response.data);
      setSuccessMessage('Registration Successful! You can now login.');
      navigate('/')
      setError({}); // Clear any errors
    } catch (error) {
      console.error('Registration Failed:', error.response || error.message);
      setSuccessMessage('');
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters.';
      formIsValid = false;
    }

    if (!email) {
      errors.email = 'Email is required.';
      formIsValid = false;
    }

    if (!fullName) {
      errors.name = 'Full name is required.';
      formIsValid = false;
    }

    setError(errors);
    return formIsValid;
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleRegister}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <Link to="/" className="link-primary">
              Sign In
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g., Jane Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {error.name && <div className="alert alert-danger mt-1">{error.name}</div>}
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && <div className="alert alert-danger mt-1">{error.email}</div>}
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && <div className="alert alert-danger mt-1">{error.password}</div>}
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {successMessage && <div className="alert alert-success mt-2">{successMessage}</div>}
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
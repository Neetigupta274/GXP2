import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // State to manage success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch the registered data from localStorage
    const registeredData = JSON.parse(localStorage.getItem('formData'));

    if (!registeredData) {
      setError('No user found. Please register first.');
      setSuccess('');  // Clear any success message if an error occurs
      return;
    }

    // Check if email and password match the stored data
    if (loginData.email === registeredData.email && loginData.password === registeredData.password) {
      setError('');  // Clear any error message on success
      setSuccess('Login successful!');  // Display success message
    } else {
      setError('Invalid email or password');
      setSuccess('');  // Clear any success message if an error occurs
    }

    // Reset form after submission
    setLoginData({
      email: '',
      password: ''
    });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </div>
        {error && <p className="error">{error}</p>}  
        {success && <p className="success">{success}</p>}  
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

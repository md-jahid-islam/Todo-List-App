import React, { useState } from 'react';
import './LoginCompo.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginCompo = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
//================ navigate part start
  const navigate = useNavigate();

  // Mock login function with spinner and toast notification part start
  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Login successful!');
      navigate('/'); 
    }, 2000);
  };
// Clear previous error
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');  
  };
// Clear previous error
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');  
  };

  // Toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Form submit handler with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
//======================= Email part start
    if (!email) {
      setEmailError('Please enter your email');
      toast.error('Please enter your email');
      isValid = false;
    }
    //============== password part start
    if (!password) {
      setPasswordError('Please enter your password');
      toast.error('Please enter your password');
      isValid = false;
    }
    if (isValid) {
      handleLogin();
    }
  };
 //=========================== design part start
  return (
    <div className="login-container">
      <ToastContainer />  
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Welcome Back!</h2>
        
        <div className="input-group" data-aos="fade-left">
          <label htmlFor="email">Email</label>
          <input 
            onChange={handleEmailChange} 
            type="text" 
            placeholder="Enter your email" 
          />
          <p>{emailError}</p>
        </div>
        
        <div className="input-group" data-aos="fade-right">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input 
              onChange={handlePasswordChange} 
              type={showPassword ? 'text' : 'password'} 
              placeholder="Enter your password" 
            />
            <span onClick={toggleShowPassword} className="eye-icon">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            <p>{passwordError}</p>
          </div>
        </div>
        
        <button type="submit" className="login-button" data-aos="zoom-in" disabled={isLoading}>
          {isLoading ? <span className="spinner"></span> : 'Login'}
        </button>
        
        <p className="login-footer" data-aos="fade-up">
        <Link to={'/Register'}>  Don't have an account? Register </Link>
          <Link to={'/ResetPass'}>  Don't have an account? ResetPass </Link>

        </p>
      </form>
    </div>
  );
};

export default LoginCompo;

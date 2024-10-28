 import React, { useState } from 'react';
 import './ResetPassCompo.css';
 import { Link, useNavigate } from 'react-router-dom';
 import { FaEye, FaEyeSlash } from "react-icons/fa6";
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

 const ResetPassCompo = () => {
  //======================== usestae part start
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //===================== navigate part start
  const navigate = useNavigate();

  // Simulated reset password function with toast notification and spinner 
  const handleResetPassword = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Password reset successfully!');
      navigate('/'); 
    }, 2000);
  };

  // Clear email error on change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');  
  };

  // Clear password error on change
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setNewPasswordError('');  
  };

  // Toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Form submit handler with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!email) {
      setEmailError('Please enter your email');
      toast.error('Please enter your email');
      isValid = false;
    }
 //=================== new password part start
    if (!newPassword) {
      setNewPasswordError('Please enter a new password');
      toast.error('Please enter a new password');
      isValid = false;
    }

    if (isValid) {
      handleResetPassword();
    }
  };
 //========================= design part start
  return (
    <div className="resetpass-container">
      <ToastContainer position="top-center" />
      <form onSubmit={handleSubmit} className="resetpass-form">
        <h2 className="resetpass-title">Reset Password</h2>
        
        <div className="input-group" data-aos="fade-left">
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <p className="error-message">{emailError}</p>
        </div>
        
        <div className="input-group" data-aos="fade-right">
          <label htmlFor="new-password">New Password</label>
          <div className="relative">
            <input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="Enter your new password"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
            <span onClick={toggleShowPassword} className="eye-icon">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <p className="error-message">{newPasswordError}</p>
        </div>
        
        <button 
          type="submit" 
          className="resetpass-button" 
          data-aos="zoom-in" 
          disabled={isLoading}
        >
          {isLoading ? <span className="spinner"></span> : 'Reset Password'}
        </button>
        
        <p className="resetpass-footer" data-aos="fade-up">
        <Link to={'/Login'}>  Already have an account? Login </Link>
       
        </p>
      </form>
    </div>
  );
 };

 export default ResetPassCompo;

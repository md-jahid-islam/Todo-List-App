// ResetPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPasscompo.css';

const ResetPasscompo = () => {
 //======================= useState  part start
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // Handle reset logic here
  const handleReset = () => {

    navigate('/Login'); 
  };
//=================== design part start
  return (
    <div className="reset-container">
      <h2>Reset Your Password</h2>
      <p>Enter your email address below, and we’ll send you a link to reset your password.</p>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleReset}>Send Reset Link</button>
    </div>
  );
};

export default ResetPasscompo;

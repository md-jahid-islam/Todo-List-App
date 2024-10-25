import React from 'react';
import './LoginCompo.css';
import { useNavigate } from 'react-router-dom';

const LoginCompo = () => {
 //================== usenavigate part start 
 const navigate = useNavigate();
 const handelLogin = ()=>{
  navigate('/')
 }
  return (
    <div className="login-container">
      <form className="login-form" data-aos="fade-up">
        <h2 className="login-title">Welcome Back!</h2>
        
        <div className="input-group" data-aos="fade-left">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        
        <div className="input-group" data-aos="fade-right">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        
        <button onClick={handelLogin} type="submit" className="login-button" data-aos="zoom-in">
          Login
        </button>
        
        <p className="login-footer" data-aos="fade-up">
          Don't have an account? <a href="/Register">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginCompo;

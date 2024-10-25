import React, { useState } from 'react';
import './RegisterCompo.css';
import { useNavigate } from 'react-router-dom';
const RegisterCompo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
 //========================= usenavigate part start
 const navigate = useNavigate();
 const handleRegister = ()=>{
    navigate('/Login')
 }

 //================ faunction part start 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 //=============== submit part start
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
 //===================== design part start
  return (
    <div className="register-container">
      <h2> Welcome To Back Register</h2>
      <form onSubmit={handleSubmit}>

        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>

        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
      
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
     
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange}/>
        
        <button onClick={handleRegister} type="submit">Register</button>
        <p className="register-footer" data-aos="fade-up">Don't have an account? <a href="/Login">Login</a> </p>
      </form>
    </div>
  );
};

export default RegisterCompo;

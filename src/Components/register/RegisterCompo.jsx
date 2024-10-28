//  import React, { useState } from 'react';
//  import './RegisterCompo.css';
//  import { Link, useNavigate } from 'react-router-dom';
//  import { FaEye, FaEyeSlash } from "react-icons/fa6";
//  import { ToastContainer, toast } from 'react-toastify';
//  import 'react-toastify/dist/ReactToastify.css';
//  //===================  usestae part start
//  const RegisterCompo = () => {
//   const [firstName, setFirstName]                         = useState('');
//   const [lastName, setLastName]                           = useState('');
//   const [email, setEmail]                                 = useState('');
//   const [password, setPassword]                           = useState('');
//   const [confirmPassword, setConfirmPassword]             = useState('');

//  //======================== usestae Error part start
//   const [firstNameError, setFirstNameError]               = useState('');
//   const [lastNameError, setLastNameError]                 = useState('');
//   const [emailError, setEmailError]                       = useState('');
//   const [passwordError, setPasswordError]                 = useState('');
//   const [confirmPasswordError, setConfirmPasswordError]   = useState('');

//  //=========================== submit usestate part start
//   const [showPassword, setShowPassword]                   = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword]     = useState(false);

//  //====================== Loding part stasrt 
//   const [isLoading, setIsLoading]                         = useState(false);

//  //==================== navigate part start
//   const navigate = useNavigate();
//  //======================== functions or toast and setIsLoading part start
//   const handleLogin = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       toast.success('Registration successful!');
//       navigate('/Login');  
//     }, 2000);
//   };

//   const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value);
//     setFirstNameError('');
//   };

//   const handleLastNameChange = (e) => {
//     setLastName(e.target.value);
//     setLastNameError('');
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setEmailError('');
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     setPasswordError('');
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//     setConfirmPasswordError('');
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleShowConfirmPassword = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };
//  //=================== sumbit part start
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let isValid = true;

//     if (!firstName) {
//       setFirstNameError('Please enter your first name');
//       toast.error('Please enter your first name');
//       isValid = false;
//     }

//     if (!lastName) {
//       setLastNameError('Please enter your last name');
//       toast.error('Please enter your last name');
//       isValid = false;
//     }

//     if (!email) {
//       setEmailError('Please enter your email');
//       toast.error('Please enter your email');
//       isValid = false;
//     }

//     if (!password) {
//       setPasswordError('Please enter your password');
//       toast.error('Please enter your password');
//       isValid = false;
//     }

//     if (!confirmPassword) {
//       setConfirmPasswordError('Please confirm your password');
//       toast.error('Please confirm your password');
//       isValid = false;
//     } else if (password !== confirmPassword) {
//       setConfirmPasswordError('Passwords do not match');
//       toast.error('Passwords do not match');
//       isValid = false;
//     }

//     if (isValid) {
//       handleLogin();
//     }
//   };
//  //============================ design part start
//   return (
//     <div className="register-container">
//       <ToastContainer />
//       <form onSubmit={handleSubmit} className="register-form">
//         <h2 className="register-title">Create Account</h2>
        
//         <div className="input-group">
//           <label htmlFor="firstName">First Name</label>
//           <input 
//             onChange={handleFirstNameChange} 
//             type="text" 
//             placeholder="Enter your first name" 
//           />
//           <p className="error-message">{firstNameError}</p>
//         </div>
        
//         <div className="input-group">
//           <label htmlFor="lastName">Last Name</label>
//           <input 
//             onChange={handleLastNameChange} 
//             type="text" 
//             placeholder="Enter your last name" 
//           />
//           <p className="error-message">{lastNameError}</p>
//         </div>

//         <div className="input-group">
//           <label htmlFor="email">Email</label>
//           <input 
//             onChange={handleEmailChange} 
//             type="text" 
//             placeholder="Enter your email" 
//           />
//           <p className="error-message">{emailError}</p>
//         </div>
        
//         <div className="input-group">
//           <label htmlFor="password">Password</label>
//           <div className="relative">
//             <input 
//               onChange={handlePasswordChange} 
//               type={showPassword ? 'text' : 'password'} 
//               placeholder="Enter your password" 
//             />
//             <span onClick={toggleShowPassword} className="eye-icon">
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//             <p className="error-message">{passwordError}</p>
//           </div>
//         </div>

//         <div className="input-group">
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <div className="relative">
//             <input 
//               onChange={handleConfirmPasswordChange} 
//               type={showConfirmPassword ? 'text' : 'password'} 
//               placeholder="Confirm your password" 
//             />
//             <span onClick={toggleShowConfirmPassword} className="eye-icon">
//               {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//             <p className="error-message">{confirmPasswordError}</p>
//           </div>
//         </div>

//         <button type="submit" className="register-button" disabled={isLoading}>
//           {isLoading ? <span className="spinner"></span> : 'Register'}
//         </button>

//         <p className="register-footer">
//          <Link to={'/Login'}>  Already have an account? Login </Link>

//         </p>
//       </form>
//     </div>
//   );
//  };

//  export default RegisterCompo;
import React, { useState } from 'react';
import './RegisterCompo.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterCompo = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Registration successful!');
      navigate('/Login');  
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!firstName) {
      setFirstNameError('Please enter your first name');
      toast.error('Please enter your first name');
      isValid = false;
    }

    if (!lastName) {
      setLastNameError('Please enter your last name');
      toast.error('Please enter your last name');
      isValid = false;
    }

    if (!email) {
      setEmailError('Please enter your email');
      toast.error('Please enter your email');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Please enter your password');
      toast.error('Please enter your password');
      isValid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      toast.error('Please confirm your password');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      toast.error('Passwords do not match');
      isValid = false;
    }

    if (isValid) {
      handleLogin();
    }
  };

  return (
    <div className="register-container">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className="register-title">Create Account</h2>
        
        <div className="input-group">
          <label htmlFor="firstName">First Name</label>
          <input 
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            type="text" 
            placeholder="Enter your first name" 
          />
          <p className="error-message">{firstNameError}</p>
        </div>
        
        <div className="input-group">
          <label htmlFor="lastName">Last Name</label>
          <input 
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
            type="text" 
            placeholder="Enter your last name" 
          />
          <p className="error-message">{lastNameError}</p>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            type="text" 
            placeholder="Enter your email" 
          />
          <p className="error-message">{emailError}</p>
        </div>
        
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input 
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'} 
              placeholder="Enter your password" 
            />
            <span onClick={() => setShowPassword(!showPassword)} className="eye-icon">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            <p className="error-message">{passwordError}</p>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="relative">
            <input 
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={showConfirmPassword ? 'text' : 'password'} 
              placeholder="Confirm your password" 
            />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="eye-icon">
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            <p className="error-message">{confirmPasswordError}</p>
          </div>
        </div>

        <button type="submit" className="register-button" disabled={isLoading}>
          {isLoading ? <span className="spinner"></span> : 'Register'}
        </button>

        <p className="register-footer">
          <Link to={'/Login'}>Already have an account? Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterCompo;

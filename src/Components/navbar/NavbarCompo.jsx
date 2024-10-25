import React, { useState } from 'react';
import './NavbarCompo.css';
import { Link } from 'react-router-dom';
const NavbarCompo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">My App</div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link href="#home">Home</Link>
        <Link href="#About">About</Link>
        <Link href="#Services">Services</Link>
        <Link href="#home">Todo app</Link>
        <Link href="#home">Todo game</Link>
        <Link href="#Contact">Contact</Link>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <Link className="line"></Link>
        <Link className="line"></Link>
        <Link className="line"></Link>
      </div>
    </nav>
  );
};

export default NavbarCompo;

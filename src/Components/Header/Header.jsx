import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';
import Logo from "/Assets/logo.png"

const Header = () => {
  return (
    <header>
      <nav>
      <div className='header-container' >
      <div className="image-container">
      <Link to="/home">          <img  src={Logo} alt="Your Logo" className="logo-main" />
      </Link>

        </div>
        <div className="links-container">
          <ul>
            <li style={{fontSize: '0.9rem'}}><Link to="/summarizers">Text Summarization</Link></li>
            <li style={{fontSize: '0.9rem'}}><Link to="/plag">Plagiarism Checker</Link></li>
            <li style={{fontSize: '0.9rem'}}><Link to="/grammar"> Paraphrasing Tool</Link></li>
            <li style={{fontSize: '0.9rem'}}><Link to="/contact">Contact Us</Link></li>
            <li style={{fontSize: '0.9rem'}}><Link to="/about">About</Link></li>
            <li style={{fontSize: '0.9rem'}}><Link to="/templates">Knowledge Base</Link></li>
            <li style={{fontSize: '0.9rem'}}><Link to="/login" className="login-btn">Login</Link></li>
            <li style={{fontSize: '0.9rem'}}><Link to="/register" className="register-btn">Register</Link></li>
          </ul>

        </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

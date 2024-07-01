import React, { useEffect } from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';
import Logo from "/Assets/logo.png";

const Header = () => {
  useEffect(() => {
    // Initialize AdSense
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error', e);
    }
  }, []);

  return (
    <header>
      <nav>
        <div className='header-container'>
          <div className="image-container">
            <Link to="/home">
              <img src={Logo} alt="Your Logo" className="logo-main" />
            </Link>
          </div>
          <div className="links-container">
            <ul>
              <li style={{fontSize: '0.9rem'}}><Link to="/summarizers">Text Summarization</Link></li>
              <li style={{fontSize: '0.9rem'}}><Link to="/plag">Plagiarism Checker</Link></li>
              <li style={{fontSize: '0.9rem'}}><Link to="/grammar">Paraphrasing Tool</Link></li>
              <li style={{fontSize: '0.9rem'}}><Link to="/contact">Contact Us</Link></li>
              <li style={{fontSize: '0.9rem'}}><Link to="/about">About</Link></li>
              <li style={{fontSize: '0.9rem'}}><Link to="/templates">Knowledge Base</Link></li>
              <li style={{fontSize: '0.9rem'}}><Link to="/login" className="login-btn">Login</Link></li>
              <li style={{fontSize: '0.9rem'}}><Link to="/register" className="register-btn">Register</Link></li>
            </ul>
          </div>
        </div>
        {/* AdSense Ad Unit */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-8014703835225677"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </div>
      </nav>
    </header>
  );
};

export default Header;

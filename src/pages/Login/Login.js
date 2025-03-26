import React, { useState } from 'react';
import './Login.css';
import LogoTree2 from '../../assets/logo/logotree2.svg';
import LogoTree3 from '../../assets/logo/logotree3.svg';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <header>
        <nav>
          <a href="#">Home</a>
          <a href="#" className="sign-in-link">Sign in</a>
        </nav>
      </header>
      
      <main>
        <div className="login-container">
          <div className="login-form">
            <h1>Welcome Back!</h1>
            <p>Please login to your account to continue.</p>
            
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-container">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    name="password" 
                  />
                  <button 
                    type="button" 
                    className="toggle-password" 
                    onClick={togglePassword}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                      <line x1="18" y1="19" x2="6" y2="5" className="eye-slash" style={{display: showPassword ? 'block' : 'none'}}></line>
                    </svg>
                  </button>
                </div>
              </div>
              
              <button type="submit" className="sign-in">Sign In</button>
            </form>
          </div>
          
          <div className="brand-container">
            <div className="logo">
                <img src={LogoTree2} alt="Tech Tree Logo" width="100" height="100" />
            </div>
            <div className="brand-name">
                <img src={LogoTree3} alt="Tech Tree" className= "brand-text"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
import React from 'react';
import './Header.css';
import About from './About';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Header(props) {
  let text=props.text;
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.post('http://localhost:3000/userlogout', {}, { withCredentials: true })
      .then((response) => {
        console.log(response.data.message);
        alert("Logout Successfull!");
        navigate('/login'); // Redirect to login page after logout
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };
  return (
    <>
      {/* Topbar Start */}
      <div className="header-container-fluid header-bg-primary header-py-3">
        <div className="header-container">
          <div className="header-row">
            <div className="header-col-md-6 header-text-center header-text-lg-left header-mb-2 header-mb-lg-0">
              <div className="header-inline-flex header-align-items-center">
                <a className="header-text-white header-pr-3" href="">
                  FAQs
                </a>
                <span className="header-text-white">|</span>
                <a className="header-text-white header-px-3" href="">
                  Help
                </a>
                <span className="header-text-white">|</span>
                <a className="header-text-white header-pl-3" href="">
                  Support
                </a>
              </div>
            </div>
            <div className="header-col-md-6 header-text-center header-text-lg-right">
              <div className="header-inline-flex header-align-items-center">
                <a className="header-text-white header-px-3" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="header-text-white header-px-3" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="header-text-white header-px-3" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="header-text-white header-px-3" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="header-text-white header-pl-3" href="">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      {/* Navbar Start */}
{/* Navbar Start */}
<div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/" className="navbar-logo">
            <h1 className="logo-text">
              <span className="logo-dry">DRY</span>
              <span className="logo-me">ME</span>
            </h1>
          </a>
        </div>
        <div className="navbar-menu">
          <button 
            type="button" 
            className="navbar-toggle" 
            data-toggle="collapse" 
            data-target="#navbarCollapse"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggle-icon"></span>
          </button>
        </div>
        <div className="navbar-collapse" id="navbarCollapse">
          <div className="navbar-links">
            <a href="/home" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/providers" className="nav-link">Providers</a>
            <a href="/orders" className="nav-link">Orders Placed</a>
          </div>
        </div>
        <button onClick={handleLogout} className="navbar-button">Logout</button>

      </nav>
    </div>

      {/* Navbar End */}

      {/* Page Header Start */}
      <div className="container">
        <div className="header-content">
          <div className="header-title">
            <h1>{text}</h1>
          </div>
          <div className="header-breadcrumb">
            <a href="/" className="breadcrumb-link">Home</a>
            <span className="breadcrumb-separator">
              <i className="fas fa-angle-right"></i>
            </span>
            <span className="breadcrumb-current">{text}</span>
          </div>
        </div>
      </div>
      {/* Page Header End */}
    </>
  );
}

export default Header;

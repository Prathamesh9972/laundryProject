import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PHeader(props) {
  const { text } = props;
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    axios.post('http://localhost:3000/service-provider/providerlogout', {}, { withCredentials: true })
      .then((response) => {
        console.log(response.data.message);
        alert("Logout Successful!");
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  const styles = {
    topBar: {
      backgroundColor: '#194376',
      color: '#ffffff',
      padding: '8px 0',
      display: isMobile ? 'none' : 'block',
    },
    topBarLinks: {
      color: '#ffffff',
      textDecoration: 'none',
      marginRight: '15px',
      fontWeight: '500',
      transition: 'opacity 0.3s ease',
    },
    topBarLinksHover: {
      opacity: 0.8,
    },
    socialIcons: {
      fontSize: '16px',
      marginLeft: '15px',
      transition: 'transform 0.3s ease',
    },
    socialIconsHover: {
      transform: 'scale(1.2)',
    },
    navbar: {
      backgroundColor: '#46C6CE',
      padding: '12px 0',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      marginBottom: '35px',
    },
    navbarContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 15px',
      height: isMobile ? '60px' : '100px',
    },
    navbarBrand: {
      fontSize: isMobile ? '24px' : '30px',
      fontWeight: 'bold',
      textDecoration: 'none',
      color: '#ffffff',
      textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
      transition: 'opacity 0.3s ease',
    },
    navbarBrandHover: {
      opacity: 0.8,
    },
    navLink: {
      color: '#000000',
      textDecoration: 'none',
      marginLeft: isMobile ? '0' : '25px',
      fontWeight: '500',
      fontSize: '17px',
      transition: 'color 0.3s ease',
    },
    navLinkHover: {
      color: '#ffffff',
    },
    logoutBtn: {
      backgroundColor: '#194376',
      color: '#ffffff',
      border: 'none',
      padding: '8px 15px',
      borderRadius: '5px',
      marginLeft: isMobile ? '0' : '25px',
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'background-color 0.3s ease',
    },
    logoutBtnHover: {
      backgroundColor: '#0d2b4d',
    },
    mobileMenuBtn: {
      display: isMobile ? 'block' : 'none',
      backgroundColor: 'transparent',
      border: 'none',
      color: '#ffffff',
      fontSize: '24px',
      cursor: 'pointer',
      transition: 'opacity 0.3s ease',
    },
    mobileMenuBtnHover: {
      opacity: 0.8,
    },
    mobileMenu: {
      display: isMobile && mobileMenuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      backgroundColor: '#46C6CE',
      position: 'absolute',
      top: '60px',
      left: 0,
      right: 0,
      padding: '20px',
      zIndex: 1000,
    },
    desktopMenu: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
    },
  };

  const menuItems = ['Home', 'About', 'Add Services', 'Orders Received'];
  const menuLinks = ["/service-provider/home", "/aboutp", "/service-provider/add-service", "/service-provider/orders"];

  const [hoveredElement, setHoveredElement] = useState(null);

  return (
    <>
      <div style={styles.topBar}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
          <div>
            {['FAQs', 'Help', 'Support'].map((item, index) => (
              <a
                key={index}
                href=""
                style={{
                  ...styles.topBarLinks,
                  ...(hoveredElement === `topLink${index}` ? styles.topBarLinksHover : {})
                }}
                onMouseEnter={() => setHoveredElement(`topLink${index}`)}
                onMouseLeave={() => setHoveredElement(null)}
              >
                {item}
              </a>
            ))}
          </div>
          <div>
            {['facebook-f', 'twitter', 'linkedin-in', 'instagram', 'youtube'].map((icon, index) => (
              <a
                key={index}
                href=""
                style={{
                  ...styles.topBarLinks,
                  ...styles.socialIcons,
                  ...(hoveredElement === `socialIcon${index}` ? styles.socialIconsHover : {})
                }}
                onMouseEnter={() => setHoveredElement(`socialIcon${index}`)}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav style={styles.navbar}>
        <div style={styles.navbarContent}>
          <a
            href=""
            style={{
              ...styles.navbarBrand,
              ...(hoveredElement === 'brand' ? styles.navbarBrandHover : {})
            }}
            onMouseEnter={() => setHoveredElement('brand')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            DRYME
          </a>
          <button
            style={{
              ...styles.mobileMenuBtn,
              ...(hoveredElement === 'mobileMenu' ? styles.mobileMenuBtnHover : {})
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            onMouseEnter={() => setHoveredElement('mobileMenu')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            ☰
          </button>
          <div style={styles.desktopMenu}>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={menuLinks[index]}
                style={{
                  ...styles.navLink,
                  ...(hoveredElement === `navLink${index}` ? styles.navLinkHover : {})
                }}
                onMouseEnter={() => setHoveredElement(`navLink${index}`)}
                onMouseLeave={() => setHoveredElement(null)}
              >
                {item}
              </a>
            ))}
            <button
              onClick={handleLogout}
              style={{
                ...styles.logoutBtn,
                ...(hoveredElement === 'logoutBtn' ? styles.logoutBtnHover : {})
              }}
              onMouseEnter={() => setHoveredElement('logoutBtn')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              Logout
            </button>
          </div>
        </div>
        <div style={styles.mobileMenu}>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={menuLinks[index]}
              style={{
                ...styles.navLink,
                margin: '10px 0',
                ...(hoveredElement === `mobileNavLink${index}` ? styles.navLinkHover : {})
              }}
              onMouseEnter={() => setHoveredElement(`mobileNavLink${index}`)}
              onMouseLeave={() => setHoveredElement(null)}
            >
              {item}
            </a>
          ))}
          <button
            onClick={handleLogout}
            style={{
              ...styles.logoutBtn,
              marginTop: '10px',
              ...(hoveredElement === 'mobileLogoutBtn' ? styles.logoutBtnHover : {})
            }}
            onMouseEnter={() => setHoveredElement('mobileLogoutBtn')}
            onMouseLeave={() => setHoveredElement(null)}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}

export default PHeader;
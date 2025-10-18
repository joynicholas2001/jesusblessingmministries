import React, { useState } from 'react'

export default function Navbar(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className='site-header'>
      <div className='container header-inner'>
        <div className='logo'>Jesus Blessing Ministries</div>
        
        {/* Desktop Navigation */}
        <nav className='nav desktop-nav'>
          <a href='#home'>Home</a>
          <a href='#jbm-church'>About</a>
          <a href='#jbm-church'>JBM Church</a>
          <a href='#ministries'>Ministries</a>
          <a href='#gallery'>Gallery</a>
          <a href='#contact'>Contact</a>
        </nav>
        
        {/* Mobile Menu Toggle Button */}
        <button className='mobile-menu-toggle' onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <button className='btn-primary desktop-give-btn'>Give</button>
      </div>
      
      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className='mobile-nav-content'>
          <div className='mobile-nav-header'>
            <h3>Menu</h3>
            <button className='mobile-nav-close' onClick={closeMobileMenu}>
              ✕
            </button>
          </div>
          <nav className='mobile-nav'>
            <a href='#home' onClick={closeMobileMenu}>Home</a>
            <a href='#jbm-church' onClick={closeMobileMenu}>About</a>
            <a href='#jbm-church' onClick={closeMobileMenu}>JBM Church</a>
            <a href='#ministries' onClick={closeMobileMenu}>Ministries</a>
            <a href='#gallery' onClick={closeMobileMenu}>Gallery</a>
            <a href='#contact' onClick={closeMobileMenu}>Contact</a>
            <div className='mobile-nav-give'>
              <button className='btn-primary' onClick={closeMobileMenu}>Give</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

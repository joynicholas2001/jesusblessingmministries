import React, { useState } from 'react'

export default function Navbar(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const ministryItems = [
    { name: 'Ministries', href: '#ministries' },
    { name: 'Orphanages', href: '#orphanages' },
    { name: 'Church Plantation', href: '#church-plantation' },
    { name: 'Street Ministry', href: '#street-ministry' },
    { name: 'Medical Camps', href: '#medical-camps' },
    { name: 'Bible College', href: '#bible-college' },
    { name: 'Widows Home', href: '#widows-home' },
    { name: 'Pastoral Services', href: '#pastoral-services' },
    { name: 'Youth Ministry', href: '#youth-ministry' },
    { name: 'Gospel Meetings', href: '#gospel-meetings' }
  ];

  return (
    <header className='site-header'>
      <div className='container header-inner'>
        <div className='logo'>Jesus Blessing Ministries</div>
        
        {/* Desktop Navigation */}
        <nav className='nav desktop-nav'>
          <a href='#home'>Home</a>
          <a href='#jbm-church'>About</a>
          <a href='#jbm-church'>JBM Church</a>
          <div className='dropdown' onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <a href='#ministries' className='dropdown-trigger'>
              Ministries <span className='dropdown-arrow'>▼</span>
            </a>
            <div className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
              {ministryItems.map((item, index) => (
                <a key={index} href={item.href} className='dropdown-item'>{item.name}</a>
              ))}
            </div>
          </div>
          <a href='#gallery'>Gallery</a>
          <a href='#contact'>Contact</a>
        </nav>
        
        {/* Mobile Menu Toggle Button */}
        <button className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <button className='btn-primary desktop-give-btn'>Give</button>
      </div>
      
      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
        <div className='mobile-nav-content' onClick={(e) => e.stopPropagation()}>
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
            <div className='mobile-dropdown'>
              <button className='mobile-dropdown-trigger' onClick={toggleMobileDropdown}>
                Ministries <span className={`dropdown-arrow ${isMobileDropdownOpen ? 'rotated' : ''}`}>▼</span>
              </button>
              <div className={`mobile-dropdown-menu ${isMobileDropdownOpen ? 'active' : ''}`}>
                {ministryItems.map((item, index) => (
                  <a key={index} href={item.href} className='mobile-dropdown-item' onClick={closeMobileMenu}>{item.name}</a>
                ))}
              </div>
            </div>
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

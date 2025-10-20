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
        
        {/* Modern Mobile Menu Toggle Button */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        <button className='btn-primary desktop-give-btn' aria-label="Make a donation">
          <span className="btn-icon">💝</span>
          <span>Give</span>
        </button>
      </div>
      
      {/* Modern Mobile Navigation */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
        <div className='mobile-nav-content' onClick={(e) => e.stopPropagation()}>
          {/* Modern Header with Brand */}
          <div className='mobile-nav-header'>
            <div className="mobile-nav-brand">
              <div className="brand-icon">✝</div>
              <div>
                <h3>JBM</h3>
                <span>Jesus Blessing Ministries</span>
              </div>
            </div>
            <button className='mobile-nav-close' onClick={closeMobileMenu} aria-label="Close menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          {/* Navigation Links with Icons */}
          <nav className='mobile-nav'>
            <div className="nav-section">
              <h4 className="nav-section-title">Navigate</h4>
              <a href='#home' onClick={closeMobileMenu} className="nav-link">
                <span className="nav-icon">🏠</span>
                <span>Home</span>
                <span className="nav-arrow">→</span>
              </a>
              <a href='#jbm-church' onClick={closeMobileMenu} className="nav-link">
                <span className="nav-icon">ℹ️</span>
                <span>About Us</span>
                <span className="nav-arrow">→</span>
              </a>
              <a href='#jbm-church' onClick={closeMobileMenu} className="nav-link">
                <span className="nav-icon">⛪</span>
                <span>JBM Church</span>
                <span className="nav-arrow">→</span>
              </a>
            </div>
            
            {/* Modern Expandable Ministries Section */}
            <div className="nav-section">
              <h4 className="nav-section-title">Our Work</h4>
              <div className='mobile-dropdown'>
                <button className='mobile-dropdown-trigger' onClick={toggleMobileDropdown} aria-expanded={isMobileDropdownOpen}>
                  <span className="nav-icon">🤝</span>
                  <span>Ministries</span>
                  <svg className={`dropdown-icon ${isMobileDropdownOpen ? 'rotated' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div className={`mobile-dropdown-menu ${isMobileDropdownOpen ? 'active' : ''}`}>
                  {ministryItems.slice(1).map((item, index) => (
                    <a key={index} href={item.href} className='mobile-dropdown-item' onClick={closeMobileMenu}>
                      <span className="dropdown-item-icon">•</span>
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="nav-section">
              <a href='#gallery' onClick={closeMobileMenu} className="nav-link">
                <span className="nav-icon">📸</span>
                <span>Gallery</span>
                <span className="nav-arrow">→</span>
              </a>
              <a href='#contact' onClick={closeMobileMenu} className="nav-link">
                <span className="nav-icon">📞</span>
                <span>Contact</span>
                <span className="nav-arrow">→</span>
              </a>
            </div>
            
            {/* Call-to-Action Section */}
            <div className='mobile-nav-cta'>
              <button className='btn-primary mobile-give-btn' onClick={closeMobileMenu}>
                <span className="btn-icon">💝</span>
                <span>Support Our Mission</span>
              </button>
              <p className="cta-subtitle">Help us spread God's love</p>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

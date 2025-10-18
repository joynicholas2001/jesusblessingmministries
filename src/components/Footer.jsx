import React from 'react'

export default function Footer({ onNavigate }) {
  return (
    <footer className='professional-footer'>
      <div className='container'>
        <div className='footer-content'>
          {/* About Section */}
          <div className='footer-section'>
            <h3 className='footer-title'>Jesus Blessing Ministries</h3>
            <p className='footer-description'>
              A place where faith grows, love abounds, and lives are transformed through the power of Jesus Christ.
            </p>
            <div className='footer-social'>
              <a href='#' className='social-link' aria-label='Facebook'>
                <span className='social-icon'>📘</span>
              </a>
              <a href='#' className='social-link' aria-label='YouTube'>
                <span className='social-icon'>📺</span>
              </a>
              <a href='#' className='social-link' aria-label='Instagram'>
                <span className='social-icon'>📷</span>
              </a>
              <a href='#' className='social-link' aria-label='Email'>
                <span className='social-icon'>📧</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='footer-section'>
            <h4 className='footer-subtitle'>Quick Links</h4>
            <ul className='footer-links'>
              <li><a href='#home'>Home</a></li>
              <li><a href='#about'>About Us</a></li>
              <li><a href='#ministries'>Ministries</a></li>
              <li><a href='#gallery'>Gallery</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </div>

          {/* Ministries */}
          <div className='footer-section'>
            <h4 className='footer-subtitle'>Our Ministries</h4>
            <ul className='footer-links'>
              <li><a href='#ministries'>Children's Ministry</a></li>
              <li><a href='#ministries'>Youth Ministry</a></li>
              <li><a href='#ministries'>Women's Ministry</a></li>
              <li><a href='#ministries'>Men's Ministry</a></li>
              <li><a href='#ministries'>Outreach Ministry</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='footer-section'>
            <h4 className='footer-subtitle'>Contact Us</h4>
            <div className='footer-contact'>
              <div className='contact-item'>
                <span className='contact-icon'>📍</span>
                <div className='contact-details'>
                  <p>JBM church, 24th ward Nethaji Nagar Repalle 522265</p>
                </div>
              </div>
              <div className='contact-item'>
                <span className='contact-icon'>📞</span>
                <div className='contact-details'>
                  <p>+91 9346859735</p>
                </div>
              </div>
              <div className='contact-item'>
                <span className='contact-icon'>📧</span>
                <div className='contact-details'>
                  <p>jesusblessingministries.vijaya@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='footer-bottom'>
          <div className='footer-bottom-content'>
            <p>&copy; {new Date().getFullYear()} Jesus Blessing Ministries. All rights reserved.</p>
            <p className='founder-credit'>Founded by Pastor Kattupalli Vijayaraju B.Th.</p>
          </div>
          <div className='footer-bottom-links'>
            <button 
              onClick={() => onNavigate('privacy')}
              className='footer-link-btn'
            >
              Privacy Policy
            </button>
            <span className='separator'>|</span>
            <button 
              onClick={() => onNavigate('terms')}
              className='footer-link-btn'
            >
              Terms of Service
            </button>
            <span className='separator'>|</span>
            <button 
              onClick={() => onNavigate('home')}
              className='footer-link-btn'
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
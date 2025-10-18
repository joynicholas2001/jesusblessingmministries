import React from 'react'

export default function PrivacyPolicy() {
  return (
    <section className='legal-page'>
      <div className='container'>
        <div className='legal-content'>
          <h1>Privacy Policy</h1>
          <p className='last-updated'>Last updated: October 18, 2025</p>
          
          <div className='legal-section'>
            <h2>Introduction</h2>
            <p>
              Jesus Blessing Ministries ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or participate in our ministry activities.
            </p>
          </div>

          <div className='legal-section'>
            <h2>Information We Collect</h2>
            
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul>
              <li>Name and contact information (email, phone, address)</li>
              <li>Prayer requests and ministry-related communications</li>
              <li>Donation and financial contribution information</li>
              <li>Event registration and participation details</li>
              <li>Ministry involvement and volunteer information</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>Browser and device information</li>
              <li>IP address and location data</li>
              <li>Website usage and navigation patterns</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          <div className='legal-section'>
            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide ministry services and spiritual support</li>
              <li>Communicate about church events, services, and activities</li>
              <li>Process donations and financial contributions</li>
              <li>Send prayer updates and ministry newsletters</li>
              <li>Improve our website and ministry programs</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </div>

          <div className='legal-section'>
            <h2>Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information. We may share information:</p>
            <ul>
              <li>With ministry staff and volunteers for legitimate ministry purposes</li>
              <li>With service providers who assist in our operations</li>
              <li>When required by law or to protect our legal rights</li>
              <li>With your explicit consent for specific purposes</li>
            </ul>
          </div>

          <div className='legal-section'>
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </div>

          <div className='legal-section'>
            <h2>Children's Privacy</h2>
            <p>
              We do not knowingly collect personal information from children under 13. If you are a 
              parent or guardian and believe your child has provided us with personal information, 
              please contact us immediately.
            </p>
          </div>

          <div className='legal-section'>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access, update, or delete your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
              <li>Request a copy of your personal data</li>
            </ul>
          </div>

          <div className='legal-section'>
            <h2>Cookies and Tracking</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can choose to 
              accept or decline cookies through your browser settings.
            </p>
          </div>

          <div className='legal-section'>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>

          <div className='legal-section'>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <div className='contact-info'>
              <p><strong>Jesus Blessing Ministries</strong></p>
              <p>Netaji Nagar, Repalle</p>
              <p>Bapatla District, Andhra Pradesh</p>
              <p>Email: info@jesusblessingministries.org</p>
              <p>Phone: +91 XXX XXX XXXX</p>
            </div>
          </div>

          <div className='back-to-site'>
            <button 
              onClick={() => window.location.reload()} 
              className='btn-primary'
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
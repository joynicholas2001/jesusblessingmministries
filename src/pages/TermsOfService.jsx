import React from 'react'

export default function TermsOfService() {
  return (
    <section className='legal-page'>
      <div className='container'>
        <div className='legal-content'>
          <h1>Terms of Service</h1>
          <p className='last-updated'>Last updated: October 18, 2025</p>
          
          <div className='legal-section'>
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using the Jesus Blessing Ministries website and participating in our 
              ministry activities, you accept and agree to be bound by the terms and provision of 
              this agreement.
            </p>
          </div>

          <div className='legal-section'>
            <h2>Ministry Mission and Values</h2>
            <p>
              Jesus Blessing Ministries is committed to spreading the Gospel of Jesus Christ and 
              building a community of believers. Our activities are guided by Christian principles 
              and biblical teachings.
            </p>
          </div>

          <div className='legal-section'>
            <h2>Use of Website</h2>
            <h3>Permitted Use</h3>
            <p>You may use our website to:</p>
            <ul>
              <li>Learn about our ministry and faith community</li>
              <li>Access spiritual resources and teachings</li>
              <li>Submit prayer requests and ministry inquiries</li>
              <li>Register for events and church services</li>
              <li>Make donations and contributions</li>
            </ul>

            <h3>Prohibited Use</h3>
            <p>You may not use our website to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Interfere with the website's operation or security</li>
              <li>Promote non-Christian beliefs or activities contrary to our faith</li>
              <li>Use automated systems to access our services</li>
            </ul>
          </div>

          <div className='legal-section'>
            <h2>Donations and Contributions</h2>
            <p>
              All donations to Jesus Blessing Ministries are voluntary and are used to support our 
              ministry work, community outreach, and church operations. Donations are generally 
              non-refundable unless required by law.
            </p>
            <ul>
              <li>Donations are processed securely through trusted payment systems</li>
              <li>We provide receipts for tax-deductible contributions as applicable</li>
              <li>Donors may specify how their contributions should be used</li>
              <li>Financial transparency reports are available upon request</li>
            </ul>
          </div>

          <div className='legal-section'>
            <h2>Events and Activities</h2>
            <p>Participation in ministry events and activities:</p>
            <ul>
              <li>May require advance registration</li>
              <li>Is subject to capacity limitations</li>
              <li>May be photographed or recorded for ministry purposes</li>
              <li>Should align with Christian conduct and values</li>
              <li>May be cancelled due to circumstances beyond our control</li>
            </ul>
          </div>

          <div className='legal-section'>
            <h2>Intellectual Property</h2>
            <p>
              The content on our website, including sermons, teachings, images, and text, is owned 
              by Jesus Blessing Ministries or used with permission. You may:
            </p>
            <ul>
              <li>Share our content for personal spiritual growth and non-commercial purposes</li>
              <li>Reference our materials with proper attribution</li>
              <li>Not modify or commercialize our content without permission</li>
            </ul>
          </div>

          <div className='legal-section'>
            <h2>Prayer Requests and Pastoral Care</h2>
            <p>
              Prayer requests and pastoral communications are treated with confidentiality and care:
            </p>
            <ul>
              <li>Shared only with appropriate ministry staff and prayer teams</li>
              <li>Used solely for providing spiritual support and prayer</li>
              <li>Not disclosed publicly without explicit permission</li>
              <li>May be followed up by pastoral staff for continued care</li>
            </ul>
          </div>

          <div className='legal-section'>
            <h2>Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided "as is" without warranties of any kind. While 
              we strive for accuracy in our content and reliable service, we cannot guarantee 
              uninterrupted access or error-free operation.
            </p>
          </div>

          <div className='legal-section'>
            <h2>Limitation of Liability</h2>
            <p>
              Jesus Blessing Ministries shall not be liable for any indirect, incidental, or 
              consequential damages arising from your use of our website or participation in 
              ministry activities.
            </p>
          </div>

          <div className='legal-section'>
            <h2>Community Guidelines</h2>
            <p>We maintain a respectful Christian environment:</p>
            <ul>
              <li>Treat all members and visitors with love and respect</li>
              <li>Engage in constructive, faith-building discussions</li>
              <li>Avoid controversial or divisive topics unrelated to our mission</li>
              <li>Support one another in spiritual growth and Christian living</li>
            </ul>
          </div>

          <div className='legal-section'>
            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our website 
              and services constitutes acceptance of any changes. We will notify users of significant 
              changes when possible.
            </p>
          </div>

          <div className='legal-section'>
            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of India and the state of Andhra Pradesh. 
              Any disputes will be resolved through appropriate legal channels in our jurisdiction.
            </p>
          </div>

          <div className='legal-section'>
            <h2>Contact Information</h2>
            <p>For questions about these Terms of Service, please contact:</p>
            <div className='contact-info'>
              <p><strong>Jesus Blessing Ministries</strong></p>
              <p>Pastor Kattupalli Vijayaraju B.Th., Founder and President</p>
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
import React from 'react'

export default function JBMChurch() {
  const churchInfo = [
    {
      title: "Our Mission",
      description: "To spread the love of Christ and build a strong community of believers who serve God and each other with passion and purpose.",
      icon: "🙏"
    },
    {
      title: "Our Vision",
      description: "To be a beacon of hope and faith in our community, transforming lives through the power of Jesus Christ.",
      icon: "✨"
    },
    {
      title: "Our Values",
      description: "Faith, Love, Service, Community, and Growth - the foundation of everything we do at Jesus Blessing Ministries.",
      icon: "❤️"
    }
  ]


  const ministries = [
    {
      name: "Children's Ministry",
      description: "Nurturing young hearts and minds in the ways of the Lord",
      ageGroup: "Ages 3-12"
    },
    {
      name: "Youth Ministry",
      description: "Empowering the next generation to live for Christ",
      ageGroup: "Ages 13-25"
    },
    {
      name: "Women's Ministry",
      description: "Building strong women of faith through fellowship and study",
      ageGroup: "All Ages"
    },
    {
      name: "Men's Ministry",
      description: "Strengthening men to be leaders in faith and family",
      ageGroup: "All Ages"
    },
    {
      name: "Senior Ministry",
      description: "Honoring our elders and providing spiritual support",
      ageGroup: "55+"
    },
    {
      name: "Outreach Ministry",
      description: "Serving our community and sharing God's love",
      ageGroup: "All Ages"
    }
  ]

  return (
    <section id='jbm-church' className='jbm-church-section'>
      <div className='container'>

        {/* Enhanced About Section */}
        <div id='about' className='about-section-enhanced'>
          <div className='about-header'>
            <div className='section-badge'>About Us</div>
            <h2 className='about-main-title'>Meet Our Spiritual Leader</h2>
            <p className='about-subtitle'>Guided by faith, driven by purpose, serving with love for over two decades</p>
          </div>

          <div className='pastor-showcase'>
            <div className='pastor-image-section'>
              <div className='pastor-image-frame'>
                <img 
                  src="/pastor-faithfulness.jpg" 
                  alt="Pastor Kattupalli Vijayaraju B.Th" 
                  className='pastor-professional-image'
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className='pastor-image-fallback' style={{display: 'none'}}>
                  <div className='fallback-icon'>👨‍💼</div>
                  <p>Pastor Image</p>
                </div>
              </div>
              <div className='pastor-credentials'>
                <div className='credential-item'>
                  <span className='credential-icon'>🎓</span>
                  <span>Bachelor of Theology</span>
                </div>
                <div className='credential-item'>
                  <span className='credential-icon'>⛪</span>
                  <span>40+ Years in Ministry</span>
                </div>
                <div className='credential-item'>
                  <span className='credential-icon'>👥</span>
                  <span>Community Leader</span>
                </div>
              </div>
            </div>

            <div className='pastor-content'>
              <div className='pastor-intro'>
                <h3 className='pastor-name'>Pastor Kattupalli Vijayaraju B.Th.</h3>
                <div className='pastor-titles'>
                  <span className='title-primary'>Founder & President</span>
                  <span className='title-secondary'>Jesus Blessing Ministries</span>
                </div>
                <div className='pastor-verse'>
                  <blockquote>
                    "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, to give you hope and a future."
                  </blockquote>
                  <cite>- Jeremiah 29:11</cite>
                </div>
              </div>

              <div className='pastor-journey'>
                <h4>A Journey of Faith & Service</h4>
                <div className='journey-timeline'>
                  <div className='timeline-item'>
                    <div className='timeline-marker'>
                      <span className='timeline-year'>1985</span>
                    </div>
                    <div className='timeline-content'>
                      <h5>Divine Calling</h5>
                      <p>With a vision and mission for the Lord's work, Pastor Kattupalli left his home in Allamudi to serve in Netaji Nagar, Repalle, answering God's call to ministry.</p>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-marker'>
                      <span className='timeline-year'>B.Th</span>
                    </div>
                    <div className='timeline-content'>
                      <h5>Theological Training</h5>
                      <p>Trained in Bible college, he worked with various missions and projects, preparing for the great work God had planned for his ministry.</p>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-marker'>
                      <span className='timeline-year'>JBM</span>
                    </div>
                    <div className='timeline-content'>
                      <h5>Ministry Foundation</h5>
                      <p>Together with his beloved wife, he established Jesus Blessing Ministries, creating a foundation for spiritual growth and community service.</p>
                    </div>
                  </div>

                  <div className='timeline-item'>
                    <div className='timeline-marker'>
                      <span className='timeline-year'>Now</span>
                    </div>
                    <div className='timeline-content'>
                      <h5>Legacy of Service</h5>
                      <p>Blessed with 3 well-educated children in engineering who are trained for upcoming ministry missions, Pastor Kattupalli continues to lead multiple churches across Bapatla district and guide pastors' fellowship in Repalle.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='pastor-impact'>
                <h4>Ministry Impact</h4>
                <div className='impact-stats'>
                  <div className='impact-item'>
                    <span className='impact-number'>23+</span>
                    <span className='impact-label'>Years of Service</span>
                  </div>
                  <div className='impact-item'>
                    <span className='impact-number'>Multiple</span>
                    <span className='impact-label'>Churches Established</span>
                  </div>
                  <div className='impact-item'>
                    <span className='impact-number'>100+</span>
                    <span className='impact-label'>Families Blessed</span>
                  </div>
                  <div className='impact-item'>
                    <span className='impact-number'>1</span>
                    <span className='impact-label'>District Fellowship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Church Info Cards */}
        <div className='church-info-grid'>
          {churchInfo.map((info, index) => (
            <div key={index} className='church-info-card'>
              <div className='info-icon'>{info.icon}</div>
              <h3>{info.title}</h3>
              <p>{info.description}</p>
            </div>
          ))}
        </div>


        {/* Ministries */}
        <div className='ministries-section'>
          <h2>Our Ministries</h2>
          <p className='section-description'>Join us in serving God and building community through our various ministries</p>
          <div className='ministries-grid'>
            {ministries.map((ministry, index) => (
              <div key={index} className='ministry-card'>
                <h3>{ministry.name}</h3>
                <p className='ministry-description'>{ministry.description}</p>
                <span className='ministry-age'>{ministry.ageGroup}</span>
              </div>
            ))}
          </div>
        </div>



        {/* Call to Action */}
        <div className='church-cta'>
          <h2>Join Our Church Family</h2>
          <p>We welcome you to be part of our growing community of believers. Come and experience the love of Christ with us.</p>
          <div className='cta-buttons'>
            <a className='btn-primary' href='#contact'>Get in Touch</a>
            <a className='btn-secondary' href='#gallery'>See Our Community</a>
          </div>
        </div>

        {/* Donation Section */}
        <div className='donation-section'>
          <h2>Support Our Ministry</h2>
          <p>For all your donations, you may support them by sending them to the ministries bank account details given below:</p>
          
          <div className='bank-details-card'>
            <div className='bank-header'>
              <h3>🏦 Bank Account Details</h3>
            </div>
            <div className='bank-details'>
              <div className='detail-row'>
                <span className='detail-label'>Bank Name:</span>
                <span className='detail-value'>HDFC</span>
              </div>
              <div className='detail-row'>
                <span className='detail-label'>A/c No:</span>
                <span className='detail-value'>23351530003723</span>
              </div>
              <div className='detail-row'>
                <span className='detail-label'>IFSC:</span>
                <span className='detail-value'>HDFC0002335</span>
              </div>
              <div className='detail-row'>
                <span className='detail-label'>SWIFT:</span>
                <span className='detail-value'>HDFCINBB</span>
              </div>
              <div className='detail-row'>
                <span className='detail-label'>Branch Address:</span>
                <span className='detail-value'>HDFC, Repalle, AP, India</span>
              </div>
            </div>
            <div className='donation-message'>
              <p>💝 Your generous contributions help us continue spreading God's love and serving our community.</p>
              <p className='verse'>"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

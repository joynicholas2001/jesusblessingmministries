import React from 'react'

export default function Home(){
  return (
    <section id='home' className='hero'>
      <div className='container hero-inner'>
        <div className='hero-text'>
          <h1>Welcome to Jesus Blessing Ministries</h1>
          <p>Building faith. Serving people. Growing together.</p>
          <div className='hero-cta'>
            <a className='btn-primary' href='#contact'>Get Involved</a>
            <a className='btn-secondary' href='#ministries'>Our Ministries</a>
          </div>
        </div>
      </div>

      {/* God's Leadership Section */}
      <section className='section god-leadership'>
        <div className='container'>
          <div className='leadership-content'>
            <div className='leadership-header'>
              <h2>23 Years of God's Faithfulness</h2>
              <p className='leadership-verse'>
                "I will give you peace" Leviticus 26:6
              </p>
            </div>
            <div className='leadership-image'>
              <div className='pastor-faithfulness-image'>
                <img 
                  src="/pastor-faithfulness.jpg" 
                  alt="Pastor Kattupalli Vijayaraju B.Th - 23 Years of Faithful Ministry" 
                  className='pastor-rectangular-image'
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className='pastor-photo' style={{display: 'none'}}>🕊️</div>
              </div>
              <div className='pastor-name'>
                <h3>Pastor K. Vijaya Raju B.Th</h3>
                <p>Founder & Senior Pastor</p>
              </div>
            </div>
            <div className='leadership-text'>
              <p className='leadership-description'>
                For 23 blessed years, God has been faithfully leading our ministry with His boundless love and amazing grace. Through every season, every challenge, and every victory, His guiding hand has never left us. We have witnessed countless testimonies of His faithfulness, experienced His provision in times of need, and seen His love transform lives in our community.
              </p>
              <div className='leadership-highlights'>
                <div className='highlight-item'>
                  <div className='highlight-number'>23</div>
                  <div className='highlight-label'>Years of Ministry</div>
                </div>
                <div className='highlight-item'>
                  <div className='highlight-number'>∞</div>
                  <div className='highlight-label'>God's Love & Grace</div>
                </div>
                <div className='highlight-item'>
                  <div className='highlight-number'>✟</div>
                  <div className='highlight-label'>Lives Transformed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Request & Ministry Support Section */}
      <section id='prayer-support' className='section prayer-support'>
        <div className='container'>
          <div className='prayer-support-header'>
            <div className='prayer-icon'>🌿</div>
            <h2>Prayer Request & Ministry Support</h2>
            <div className='greeting-banner'>
              <p className='praise-greeting'>
                <span className='praise-text'>Praise the Lord!</span>
                <br />
                Greetings to you in the precious name of our Lord and Savior, Jesus Christ.
              </p>
            </div>
          </div>
          
          <div className='prayer-content'>
            <div className='ministry-story'>
              <div className='story-section'>
                <div className='story-icon'>✝️</div>
                <div className='story-text'>
                  <p>
                    By God's grace, I have been serving Him for several years through an <strong>Orphanage Home</strong>, 
                    a <strong>Widows' Home</strong>, and by supporting dedicated <strong>Co-Pastors</strong> who faithfully 
                    serve in ministry. It has been a great joy to witness the transforming power of God's love in the 
                    lives of those we minister to.
                  </p>
                </div>
              </div>

              <div className='story-section'>
                <div className='story-icon'>📖</div>
                <div className='story-text'>
                  <p>
                    Before my accident, I actively participated in <strong>Gospel Crusades</strong> and traveled 
                    regularly to various places to share the Good News of Jesus Christ. Through these meetings, 
                    I was able to support the ministry and manage its needs to some extent.
                  </p>
                </div>
              </div>

              <div className='story-section challenge-section'>
                <div className='story-icon'>🙏</div>
                <div className='story-text'>
                  <p>
                    However, since the accident last year, it has become very difficult to continue managing the 
                    Orphanage Home, Widows' Home, and Pastoral Support as before. Despite these challenges, my heart 
                    remains steadfast in serving the Lord and caring for those He has entrusted to me.
                  </p>
                </div>
              </div>
            </div>

            <div className='support-request'>
              <div className='request-card'>
                <div className='request-header'>
                  <h3>🤲 We Humbly Request Your Support</h3>
                </div>
                <div className='request-content'>
                  <p className='request-text'>
                    We humbly request your <strong>prayers</strong> and <strong>monthly support</strong> as the Lord enables you.
                  </p>
                  <div className='support-amount'>
                    <div className='amount-box'>
                      <span className='currency'>$</span>
                      <span className='amount'>1000</span>
                      <span className='period'>USD / Month</span>
                    </div>
                    <p className='amount-description'>
                      Each month, around $1000 (USD) is needed to meet the essential requirements for 
                      <strong> food, clothing, medical care, and ministry support</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className='sharing-request'>
                <div className='sharing-icon'>💝</div>
                <p>
                  Please also help by <strong>sharing this prayer request</strong> with your friends, family, 
                  and church members who may be led to stand with us in prayer or in support.
                </p>
              </div>

              <div className='prayer-promise'>
                <div className='promise-icon'>🕊️</div>
                <p>
                  Here in our ministry, we continually <strong>pray for you and your loved ones</strong>, 
                  that the Lord may bless you abundantly for your love and partnership in His work.
                </p>
              </div>
            </div>

            <div className='scripture-section'>
              <div className='scripture-card'>
                <div className='scripture-quote'>
                  <span className='quote-mark'>"</span>
                  <p className='scripture-text'>
                    He who has pity on the poor lends to the Lord, and He will pay back what he has given.
                  </p>
                  <span className='quote-mark closing'>"</span>
                </div>
                <div className='scripture-reference'>
                  — Proverbs 19:17 (NKJV)
                </div>
              </div>
            </div>

            <div className='closing-message'>
              <div className='gratitude-section'>
                <p>
                  Thank you for your <strong>prayers, encouragement, and support</strong>.<br />
                  May God richly bless you and keep you in His grace.
                </p>
              </div>
              
              <div className='signature-section'>
                <div className='signature-content'>
                  <p className='service-signature'>In Christ's service,</p>
                  <div className='pastor-signature'>
                    <p className='pastor-name'>— Pastor K. Vijaya Raju B.Th</p>
                    <p className='ministry-name'>Jesus Blessing Ministries</p>
                    <p className='location'>Repalle, Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='ministries' className='section alt'>
        <div className='container'>
          <h2>Ministries</h2>
          <div className='grid'>
            <div className='card'>
              <h3>Worship</h3>
              <p>Weekly worship gatherings.</p>
            </div>
            <div className='card'>
              <h3>Youth</h3>
              <p>Programs for students and young adults.</p>
            </div>
            <div className='card'>
              <h3>Outreach</h3>
              <p>Community service and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section id='featured-video' className='section featured-video'>
        <div className='container'>
          <div className='video-header'>
            <h2>Watch Our Latest Message</h2>
            <p className='video-description'>
              Experience the power of God's word through our inspiring messages and testimonies of faith.
            </p>
          </div>
          <div className='video-container'>
            <div className='video-wrapper' onClick={() => window.open('https://www.youtube.com/watch?v=cyAk6mggLhY&t=85s', '_blank')}>
              <iframe
                src="https://www.youtube.com/embed/cyAk6mggLhY?start=85"
                title="Jesus Blessing Ministries - Latest Message"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="youtube-video"
                style={{pointerEvents: 'none'}}
              ></iframe>
              <div className='video-overlay'>
                <div className='play-button'>
                  <span className='play-icon'>▶</span>
                  <span className='play-text'>Watch on YouTube</span>
                </div>
              </div>
            </div>
            <div className='video-info'>
              <div className='video-stats'>
                <div className='stat-item'>
                  <span className='stat-icon'>📺</span>
                  <span className='stat-text'>Subscribe to our channel</span>
                </div>
                <div className='stat-item'>
                  <span className='stat-icon'>🔔</span>
                  <span className='stat-text'>Turn on notifications</span>
                </div>
                <div className='stat-item'>
                  <span className='stat-icon'>💬</span>
                  <span className='stat-text'>Share with friends</span>
                </div>
              </div>
              <a 
                href="https://www.youtube.com/watch?v=cyAk6mggLhY&t=85s" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='btn-primary video-cta'
              >
                <span className='btn-icon'>▶️</span>
                Watch Full Video
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id='service-times' className='section alt'>
        <div className='container'>
          <h2>Weekly Service Timings</h2>
          <div className='service-times-grid'>
            <div className='service-day'>
              <h3>Netaji Nagar, Repalle</h3>
              <div className='services-list'> 
                <div className='service-item'>
                  <span className='service-time'>11:00 AM</span>
                  <span className='service-name'>Sunday Morning Worship</span>
                </div>
                <div className='service-item'>
                  <span className='service-time'>7:00 PM</span>
                  <span className='service-name'>Every Saturday Fasting Prayer</span>
                </div>
                <div className='service-item'>
                  <span className='service-time'>8:00 PM</span>
                  <span className='service-name'>All Night Prayer Every Second Monday</span>
                </div>
              </div>
            </div>
            <div className='service-day'>
              <h3>Aalamudi</h3>
              <div className='services-list'>
                <div className='service-item'>
                  <span className='service-time'>7:00 AM</span>
                  <span className='service-name'>Sunday Morning Worship</span>
                </div>
                <div className='service-item'>
                  <span className='service-time'>8:00 PM</span>
                  <span className='service-name'>All Night Prayer Every First Monday</span>
                </div>
              </div>
            </div>  
            <div className='service-day'>
              <h3>Morlavaripallem</h3>
              <div className='services-list'>
                <div className='service-item'>
                  <span className='service-time'>10:00 AM</span>
                  <span className='service-name'>Sunday Morning Worship</span>
                </div>
                <div className='service-item'>
                  <span className='service-time'>10:00 AM</span>
                  <span className='service-name'>Every Friday Fasting Prayer</span>
                </div>
                <div className='service-item'>
                  <span className='service-time'>8:00 PM</span>
                  <span className='service-name'>All Night Prayer Every First Friday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

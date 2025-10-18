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
            <div className='leadership-text'>
              <h2>23 Years of God's Faithfulness</h2>
              <p className='leadership-verse'>
                "I will give you peace" Leviticus 26:6
              </p>
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
            <div className='leadership-image'>
              <div className='pastor-faithfulness-image'>
                <img 
                  src="/pastor-faithfulness.jpg" 
                  alt="Pastor Kattupalli Vijayaraju B.Th - 23 Years of Faithful Ministry" 
                  className='pastor-circular-image'
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

      <section id='service-times' className='section alt'>
        <div className='container'>
          <h2>Service Times</h2>
          <div className='service-times-grid'>
            <div className='service-day'>
              <h3>Sunday</h3>
              <div className='services-list'>
                <div className='service-item'>
                  <span className='service-time'>8:00 AM</span>
                  <span className='service-name'>Early Morning Worship</span>
                </div>
                <div className='service-item'>
                  <span className='service-time'>10:30 AM</span>
                  <span className='service-name'>Main Worship Service</span>
                </div>
                <div className='service-item'>
                  <span className='service-time'>6:00 PM</span>
                  <span className='service-name'>Evening Service</span>
                </div>
              </div>
            </div>
            <div className='service-day'>
              <h3>Wednesday</h3>
              <div className='services-list'>
                <div className='service-item'>
                  <span className='service-time'>7:00 PM</span>
                  <span className='service-name'>Bible Study & Prayer</span>
                </div>
              </div>
            </div>
            <div className='service-day'>
              <h3>Friday</h3>
              <div className='services-list'>
                <div className='service-item'>
                  <span className='service-time'>7:30 PM</span>
                  <span className='service-name'>Youth Fellowship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

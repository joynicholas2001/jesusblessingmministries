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
        {/* Hero Section */}
        <div className='church-hero'>
          <h1>Welcome to Jesus Blessing Ministries</h1>
          <p className='church-subtitle'>A place where faith grows, love abounds, and lives are transformed</p>
          <div className='church-hero-cta'>
            <a className='btn-primary' href='#contact'>Visit Us</a>
            <a className='btn-secondary' href='#ministries'>Our Ministries</a>
          </div>
        </div>

        {/* About Section - Pastor Details */}
        <div id='about' className='about-section'>
          <h2>About Us</h2>
          <div className='pastor-profile'>
            <div className='pastor-photo-container'>
              <img 
                src="/src/pastor-faithfulness.jpg.jpeg" 
                alt="Pastor Kattupalli Vijayaraju B.Th" 
                className='pastor-about-image'
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className='pastor-photo' style={{display: 'none'}}>👨‍💼</div>
            </div>
            <div className='pastor-details'>
              <h3>Pastor Kattupalli Vijayaraju B.Th.</h3>
              <p className='pastor-title'>Founder and President of Jesus Blessing Ministries</p>
              <div className='pastor-story'>
                <p>Pastor Kattupalli Vijayaraju is the founder and president of Jesus Blessing Ministries, Repalle. With a vision and mission for the Lord's work, he left his home in Allamudi to Netaji Nagar, Repalle, in the year 1985.</p>
                
                <p>He was trained in a Bible college and worked with various missions and projects of the Bible college. Later he took the vision of the Lord for his ministry and established the JESUS BLESSING MINISTRIES with his beloved wife.</p>
                
                <p>He is blessed with 3 children who are well-educated in engineering and also trained for the upcoming mission of the Lord for his glory. The Lord accomplished various churches in Bapatla district of Andhra Pradesh, and the Lord helped him to work with all the pastors and also lead the pastors fellowship in town Repalle.</p>
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
      </div>
    </section>
  )
}

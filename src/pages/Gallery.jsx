import React from 'react'

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      alt: 'Worship Service',
      category: 'Worship',
      title: 'Sunday Morning Worship'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
      alt: 'Youth Group',
      category: 'Youth',
      title: 'Youth Fellowship'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
      alt: 'Community Outreach',
      category: 'Outreach',
      title: 'Community Service'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
      alt: 'Bible Study',
      category: 'Ministry',
      title: 'Bible Study Group'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop',
      alt: 'Children Ministry',
      category: 'Children',
      title: 'Children\'s Ministry'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      alt: 'Prayer Meeting',
      category: 'Prayer',
      title: 'Prayer Meeting'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=300&fit=crop',
      alt: 'Church Events',
      category: 'Events',
      title: 'Special Events'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
      alt: 'Fellowship',
      category: 'Fellowship',
      title: 'Church Fellowship'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
      alt: 'Mission Work',
      category: 'Mission',
      title: 'Mission Work'
    }
  ]

  return (
    <section id='gallery' className='gallery-section'>
      <div className='container'>
        <div className='gallery-header'>
          <h1>Gallery</h1>
          <p>Capturing moments of faith, fellowship, and community at Jesus Blessing Ministries</p>
        </div>

        <div className='gallery-grid'>
          {galleryImages.map(image => (
            <div key={image.id} className='gallery-item'>
              <div className='gallery-image-container'>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className='gallery-image'
                  loading='lazy'
                />
                <div className='gallery-overlay'>
                  <div className='gallery-content'>
                    <h3>{image.title}</h3>
                    <span className='gallery-category'>{image.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <section id='contact' className='section'>
        <div className='container'>
          <h2>Contact Us</h2>
          <div className='contact-content'>
            <div className='contact-info'>
              <h3>Get in Touch</h3>
              <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              
              <div className='contact-details'>
                <div className='contact-item'>
                  <div className='contact-icon'>📍</div>
                  <div>
                    <h4>Address</h4>
                    <p>JESUS BLESSING MINISTRIES Church, 24th ward Nethaji Nagar Repalle - 522265</p>
                  </div>
                </div>
                
                <div className='contact-item'>
                  <div className='contact-icon'>📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 9346859735</p>
                  </div>
                </div>
                
                <div className='contact-item'>
                  <div className='contact-icon'>✉️</div>
                  <div>
                    <h4>Email</h4>
                    <p> jesusblessingministries.vijaya@gmail.com </p>
                  </div>
                </div>
                
              </div>
            </div>
            
            <div className='contact-form-container'>
              <form className='contact-form'>
                <div className='form-group'>
                  <label htmlFor='name'>Full Name</label>
                  <input type='text' id='name' name='name' placeholder='Your full name' required />
                </div>
                
                <div className='form-group'>
                  <label htmlFor='phone'>Phone Number</label>
                  <input type='tel' id='phone' name='phone' placeholder='+91 XXXXXXXXXX' required />
                </div>
                
                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input type='email' id='email' name='email' placeholder='your.email@example.com' required />
                </div>
                
                <div className='form-group'>
                  <label htmlFor='message'>Contact Message</label>
                  <textarea 
                    id='message' 
                    name='message' 
                    rows='5' 
                    placeholder='Please share your message, prayer request, or any questions you have...'
                    required
                  ></textarea>
                </div>
                
                <button type='submit' className='btn-primary contact-submit'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

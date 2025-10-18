import React from 'react'

export default function Navbar(){
  return (
    <header className='site-header'>
      <div className='container header-inner'>
        <div className='logo'>Jesus Blessing Ministries</div>
        <nav className='nav'>
          <a href='#home'>Home</a>
          <a href='#jbm-church'>About</a>
          <a href='#jbm-church'>JBM Church</a>
          <a href='#ministries'>Ministries</a>
          <a href='#gallery'>Gallery</a>
          <a href='#contact'>Contact</a>
        </nav>
        <button className='btn-primary'>Give</button>
      </div>
    </header>
  )
}

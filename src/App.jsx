import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import JBMChurch from './pages/JBMChurch'
import Gallery from './pages/Gallery'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

export default function App(){
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'privacy':
        return <PrivacyPolicy />
      case 'terms':
        return <TermsOfService />
      default:
        return (
          <>
            <Home />
            <JBMChurch />
            <Gallery />
          </>
        )
    }
  }

  return (
    <div className='app'>
      <Navbar />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  )
}

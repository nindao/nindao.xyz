import React from 'react'

import Header from '../lib/components/Header'
import Footer from '../lib/components/Footer'


const Purchasetnx: React.FC = () => {
  return (
    <div
      className='App d-flex flex-column justify-content-between'
      style={{ minHeight: '100vh' }}
    >
      <Header />
      <div className='container my-5'>
        <div className='row'>
          <div className='col-12 my-5'>
            <h1 className='h1 mb-4'>
            Thank you for your purchase!
            </h1>
            <br />
            Please fill out the information in <a href='https://docs.google.com/forms/u/1/d/e/1FAIpQLSd-RKvfSuTM2T2BKKXBTLXjHn9rr6i5hOlf7TiTMIZ9Wl2gjA/viewform?usp=sharing'>this contact form</a> to receive access to the software.
            <br /><br />
            We will reach out to you via the email you provided to discuss any further customizations.
            <br /><br />
            — Your NinDAO Team
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default Purchasetnx

'use client'

import React from 'react'

import { Context } from './lib/components/Store'
import Header from './lib/components/Header'
import Footer from './lib/components/Footer'
import Hero from './lib/sections/Hero'
import Bot from './lib/sections/Bot'
import About from './lib/sections/About'
import Instructions from './lib/sections/Instructions'
import FAQ from './lib/sections/FAQ'


const Site: React.FC = () => {
  const store = React.useContext(Context)
  const site = store?.contentful?.sites?.[0]

  return store.ready && site ?
    <div className="App">
      <Header />
      <Hero section={site.heroSection} />
      <Bot section={site.botSection} />
      <About section={site.aboutSection} />
      <Instructions section={site.instructionsSection} />
      <FAQ section={site.faqSection} />
      <Footer />
    </div>
    :
    <div />
}


export default Site

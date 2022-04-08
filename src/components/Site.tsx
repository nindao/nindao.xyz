import React from 'react'

import { Context } from './Store'
import Header from './Header'
import Footer from './Footer'
import SectionWithBackground from './SectionWithBackground'
import Background from './Background'

import backgroundImg from '../styles/img/background.jpg'

const Site: React.FC = () => {
  const store = React.useContext(Context)

  return store.ready ?
    <div className="App">
      <Header />
      <SectionWithBackground
        backgroundImage={backgroundImg}
      >
        <Background />
      </SectionWithBackground>
      <Footer />
    </div>
    :
    <div />
}


export default Site

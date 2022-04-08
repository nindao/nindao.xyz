import React from 'react'

import { Context } from './Store'
import Header from './Header'
import Footer from './Footer'


const Site: React.FC = () => {
  const store = React.useContext(Context)

  return store.ready ?
    <div className="App">
      <Header />
      <Footer />
    </div>
    :
    <div />
}


export default Site

import React from 'react'
import Div100vh from 'react-div-100vh'

import { Provider } from './components/Store'
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/index.sass'


const App: React.FC = () =>
  <Provider>
    <Div100vh>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </Div100vh >
  </Provider>


export default App

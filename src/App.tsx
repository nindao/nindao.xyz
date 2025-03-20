import React from 'react'
import Div100vh from 'react-div-100vh'

import { Provider } from './components/Store'
import Loader from './components/Loader'
import MyRoutes from './components/MyRoutes'

import './styles/index.sass'


const App: React.FC = () =>
  <Provider>
    <Div100vh>
      <Loader />
      <MyRoutes />
    </Div100vh >
  </Provider>


export default App

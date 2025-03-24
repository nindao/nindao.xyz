import { RouteObject } from 'react-router-dom'

import Redirect from '../Redirect'
import Site from '../../pages/Site'
import Impressum from '../../pages/Impressum'
import Purchasetnx from '../../pages/Purchasetnx'


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Site />,
    errorElement: <Redirect to='/'/>
  },
  {
    path: '/impressum',
    element: <Impressum />,
    errorElement: <Redirect to='/'/>
  },
  {
    path: '/purchasetnx',
    element: <Purchasetnx />,
    errorElement: <Redirect to='/'/>
  },
]


export default routes

'use client'

import React from 'react'

import {
  StateType,
  initialState
} from './Types'


const Context = React.createContext<StateType>(initialState as any as StateType)


export default Context
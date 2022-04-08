import React from 'react'

import _ from 'lodash'

import {
  StateType,
  initialState,
} from './Types'
import Context from './Context'
import {
  parseContentfulItems,
  createContentfulClient
} from '../../libs/utils/contentful'


class Provider extends React.Component<{}, StateType> {

  state = initialState

  initializeCallBacks: Function[] = []

  componentDidMount = () => {
    this.loadContentful()
  }

  loadContentful = async () => {
    const client = createContentfulClient()

    this.setState({
      contentfulData: [
        await parseContentfulItems((await client.getEntries({ limit: 200, })).items),
      ]
    })

    console.log(this.state.contentfulData[0])

    this.callInitializeCallbacks()
  }

  updateContentful = async (update: boolean = true) => {
    this.setState({ ready: false })

    await this.loadContentful()

    this.setState({ ready: true })

    update &&
      this.callInitializeCallbacks()
  }

  registerInitializeCallback = (fn: Function) => {
    this.initializeCallBacks.push(fn)
    this.state.contentfulData.length > 0 && fn()
  }

  callInitializeCallbacks = () =>
    setTimeout(() =>
      this.initializeCallBacks
        .forEach((callback: Function) =>
          callback())
      , 100
    )

  stateAndSetters = () => {
    const nonState = {
      setState: (obj: any) => this.setState(obj),

      contentful: this.state.contentfulData,
      updateContentful: this.updateContentful,

      registerInitializeCallback: this.registerInitializeCallback,
    }

    return ({
      ...(this.state.ready ? this.state : initialState),
      ...nonState
    })
  }

  render = () =>
    <Context.Provider value={this.stateAndSetters()}>
      {this.props.children}
    </Context.Provider>
}


export default Provider
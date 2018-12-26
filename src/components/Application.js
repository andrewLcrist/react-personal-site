import React, { Component } from 'react'
import WelcomePane from './WelcomePane'
import Lines from './Lines'
import {FadePane} from './FadePane'

export default class Application extends Component{
  render() {
    return(
      <div id="parent">
        <WelcomePane />
        <Lines />
      </div>
    )
  }
}

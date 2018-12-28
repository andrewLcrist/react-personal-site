import React, { Component } from 'react'
import WelcomePane from './WelcomePane'
import Lines from './Lines'
import {Logos} from './Logos'
import {AboutMeBrief} from './AboutMeBrief'

export default class Application extends Component{
  render() {
    return(
      <div id="parent">
        <Logos />
        <WelcomePane />
        <AboutMeBrief />
        <Lines />
      </div>
    )
  }
}

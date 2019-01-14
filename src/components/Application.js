import React, { Component } from 'react'
import WelcomePane from './WelcomePane'
import Lines from './Lines'
import {Logos} from './Logos'
import {AboutMeBrief} from './AboutMeBrief'
import {HighlightedProject} from './HighlightedProject'
import OutsideWork from './OutsideWork'

export default class Application extends Component{
  constructor(){
    super()
    this.state = {
      renderLogos: true
    }
  }

  render() {
    let lastScrollTop = 0
    let renderLogos = true
    let self = this

    window.addEventListener("scroll", function(){
      const linesContainer = document.getElementById('linesContainer');
      const distanceToTop = linesContainer.getBoundingClientRect().top;

      let st = window.pageYOffset || document.documentElement.scrollTop

      if (st > lastScrollTop && self.state.renderLogos && distanceToTop <= window.innerHeight/2){
        self.setState({renderLogos: false})
      } else if ( st < lastScrollTop && !self.state.renderLogos && distanceToTop >= window.innerHeight/2){
        self.setState({renderLogos: true})
      }
      lastScrollTop = st <= 0 ? 0 : st
    })

    return(
      <div id="parent">
        {this.state.renderLogos ? <Logos /> : null}
        <WelcomePane />
        <AboutMeBrief />
        <OutsideWork />
        <Lines />
      </div>
    )
  }
}

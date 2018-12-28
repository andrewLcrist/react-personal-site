import React, { Component } from 'react'

export default class OutsideWork extends Component{

  componentDidMount() {
    addEventListener('scroll', this.checkForAnimationStatus)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkForAnimationStatus)
  }

  checkForAnimationStatus = () => {
    var linesContainer = document.getElementById('linesContainer')
    var linesContainerDistanceToTop = linesContainer.getBoundingClientRect().top

    if(linesContainerDistanceToTop < this.state.windowInnerHeight && !this.state.loop) {
      this.setState({loop: true})
    }
    if(linesContainerDistanceToTop > this.state.windowInnerHeight && this.state.loop) {
      this.setState({loop: false})
    }
  }

  render() {
    return(
      <div id="outsideWorkContainer" >
      </div>
    )
  }
}

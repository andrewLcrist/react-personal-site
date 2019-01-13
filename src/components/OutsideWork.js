import React, { Component } from 'react'
import * as images from '../constants/constants'
import * as utils from '../utils/utils'

export default class OutsideWork
 extends Component{
  constructor(){
    super()
    this.state = {
      picture: 1,
      loop: true,
      faces: {
        1: {
          image: images.cooking,
          altText: 'Andrew cooking bitmoji'
        },
        2: {
          image: images.fishing,
          altText: 'Andrew fishing bitmoji'
        },
        3: {
          image: images.frisbee,
          altText: 'Andrew playing frisbee bitmoji'
        },
        4: {
          image: images.gardening,
          altText: 'Andrew gardening bitmoji'
        },
        5: {
          image: images.movieWatching,
          altText: 'Andrew watcing movie bitmoji'
        },
        6: {
          image: images.reading,
          altText: 'Andrew reading bitmoji'
        },
        7: {
          image: images.volleyball,
          altText: 'Andrew playing volleyball bitmoji'
        }
      }
    }
  }

  componentDidMount() {
    setInterval(() => this.changePicture(), 2000)
    window.addEventListener('scroll', this.checkForAnimationStatus)
  }

  changePicture = () => {
    this.state.loop && (this.state.picture === 7 ?
      this.setState({picture: 1})
      : this.setState({picture: this.state.picture + 1}))
  }

  checkForAnimationStatus = () => {
    let outsideWorkContainer = document.getElementById('outsideWorkContainer');
    let linesContainer = document.getElementById('linesContainer');
    let outsideWorkDistanceToTop = outsideWorkContainer.getBoundingClientRect().top + (window.innerHeight/5);
    let linesContainerDistanceToTop = linesContainer.getBoundingClientRect().top

    if(linesContainerDistanceToTop < outsideWorkDistanceToTop) this.setState({loop: false})
    if(linesContainerDistanceToTop > outsideWorkDistanceToTop) this.setState({loop: true})
  }

  render() {
    utils.scrollListener('outsideWorkBack', 'outsideWorkContainer', 'linesContainer', '200vh')

    return(
      <div id="outsideWorkContainer">
      <div id="outsideWorkBack" style={{width: '100%', height: '100%', zIndex: 1, position: 'absolute'}} > </div>
        <div id="outsideWorkContentsContainer">
          <h2 className="popGreen" style={{marginBottom: '5rem'}}>When I'm not working...</h2>
          <img alt={this.state.faces[this.state.picture].altText} className="welcomeImage" src={this.state.faces[this.state.picture].image}/>
        </div>
      </div>
    )
  }
}

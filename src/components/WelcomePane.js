import React, { Component } from 'react'
import image1 from '../images/dressLeft.png'
import image2 from '../images/dressForward.png'
import image3 from '../images/dressRight.png'
import image4 from '../images/dressSurprise.png'
import * as images from '../constants/constants'

export default class WelcomePane extends Component{
  constructor(){
    super()
    this.state = {
      picture: 1,
      loop: true,
      faces: {
        1: {
          image: images.dressLeft,
          altText: 'Andrew bitmoji looking left'
        },
        2: {
          image: images.dressForward,
          altText: 'Andrew bitmoji looking forward'
        },
        3: {
          image: images.dressRight,
          altText: 'Andrew bitmoji looking right'
        },
        4: {
          image: images.dressSurprise,
          altText: 'Andrew bitmoji looking surpised'
        }
      }
    }
  }

  componentDidMount() {
    setInterval(() => this.changePicture(), 1000)
    window.addEventListener('scroll', this.checkForAnimationStatus)
  }

  changePicture = () => {
    this.state.loop && (this.state.picture === 4 ?
      this.setState({picture: 1})
      : this.setState({picture: this.state.picture + 1}))
  }

  checkForAnimationStatus = () => {
    let welcomePaneContainer = document.getElementById('welcomePaneContainer');
    let aboutMeContainer = document.getElementById('aboutMeContainer');
    let container1DistanceToTop = welcomePaneContainer.getBoundingClientRect().top + (window.innerHeight/5);
    let container2DistanceToTop = aboutMeContainer.getBoundingClientRect().top

    if(container2DistanceToTop < container1DistanceToTop) this.setState({loop: false})
    if(container2DistanceToTop > container1DistanceToTop) this.setState({loop: true})
  }


  render() {
    let lastScrollTop = 0

    window.addEventListener("scroll", function(){
      const welcomePaneBack = document.getElementById('welcomePaneBack');
      const aboutMeContainer = document.getElementById('aboutMeContainer')

      const distanceToTop = aboutMeContainer.getBoundingClientRect().top;
      const opacity = (1 - (distanceToTop / window.innerHeight))

      welcomePaneBack.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`

      let st = window.pageYOffset || document.documentElement.scrollTop
      lastScrollTop = st <= 0 ? 0 : st
    })
    return(
      <div id="welcomePaneContainer">
      <div id="welcomePaneBack" style={{width: '100%', height: '100%', zIndex: 1, position: 'absolute'}} > </div>
        <div id="welcomePaneContentsContainer">
          <h1 className="topDrop">Hi, I'm Andrew.</h1>
          <img
            alt={this.state.faces[this.state.picture].altText}
            id="bitmoji"
            className="welcomeImage"
            src={this.state.faces[this.state.picture].image}
          />
        </div>
        <p className="keep-scrolling bottomUp">(Scroll to learn more about me.)</p>
      </div>
    )
  }
}

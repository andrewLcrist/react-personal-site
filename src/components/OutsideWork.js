import React, { Component } from 'react'
import image1 from '../images/cooking.png'
import image2 from '../images/fishing.png'
import image3 from '../images/frisbee.png'
import image4 from '../images/gardening.png'
import image5 from '../images/movieWatching.png'
import image6 from '../images/gardening.png'
import image7 from '../images/volleyball.png'

export default class OutsideWork
 extends Component{
  constructor(){
    super()
    this.state = {
      picture: 1,
      loop: true,
      faces: {
        1: {
          image: image1,
          altText: 'Andrew cooking bitmoji'
        },
        2: {
          image: image2,
          altText: 'Andrew fishing bitmoji'
        },
        3: {
          image: image3,
          altText: 'Andrew playing frisbee bitmoji'
        },
        4: {
          image: image4,
          altText: 'Andrew gardening bitmoji'
        },
        5: {
          image: image5,
          altText: 'Andrew watcing movie bitmoji'
        },
        6: {
          image: image6,
          altText: 'Andrew gardening bitmoji'
        },
        7: {
          image: image7,
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
    let lastScrollTop = 0

    window.addEventListener("scroll", function(){
      const outsideWorkBack = document.getElementById('outsideWorkBack');
      const outsideWorkContainer = document.getElementById('outsideWorkContainer');
      const linesContainer = document.getElementById('linesContainer')

      const distanceToTop = linesContainer.getBoundingClientRect().top;
      const opacity = (1 - (distanceToTop / window.innerHeight))

      outsideWorkBack.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`

      let st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop && distanceToTop <= window.innerHeight){
        outsideWorkContainer.style.position = 'fixed'
        outsideWorkContainer.style.top = '0'
        outsideWorkContainer.style.height = '100vh'
      } else if ( st < lastScrollTop && linesContainer.getBoundingClientRect().top >= window.innerHeight){
        outsideWorkContainer.style.position = 'absolute'
        outsideWorkContainer.style.top = '200vh'
        outsideWorkContainer.style.height = '150vh'
      }
      lastScrollTop = st <= 0 ? 0 : st
    })


    return(
      <div id="outsideWorkContainer">
      <div id="outsideWorkBack" style={{width: '100%', height: '100%', zIndex: 1, position: 'absolute'}} > </div>
        <div id="outsideWorkContentsContainer">
          <h2>Outside work I'm usually...</h2>
          <img alt={this.state.faces[this.state.picture].altText} className="welcomeImage" src={this.state.faces[this.state.picture].image}/>
        </div>
      </div>
    )
  }
}

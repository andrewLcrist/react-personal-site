import React, { Component } from 'react'
import image1 from '../images/dressLeft.png'
import image2 from '../images/dressForward.png'
import image3 from '../images/dressRight.png'
import image4 from '../images/dressSurprise.png'

export default class WelcomePane extends Component{
  constructor(){
    super()
    this.state = {
      picture: 1,
      loop: true,
      faces: {
        1: image1,
        2: image2,
        3: image3,
        4: image4
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
    let container1 = document.getElementById('container1');
    let container2 = document.getElementById('fadePane');
    let container1DistanceToTop = container1.getBoundingClientRect().top + (window.innerHeight/5);
    let container2DistanceToTop = container2.getBoundingClientRect().top

    if(container2DistanceToTop < container1DistanceToTop) this.setState({loop: false})
    if(container2DistanceToTop > container1DistanceToTop) this.setState({loop: true})
  }

  render() {
    return(
      <div id="container1">
        <h1 className="topDrop">Hi, I'm Andrew.</h1>
        <img id="bitmoji" src={this.state.faces[this.state.picture]}/>
        <p className="keep-scrolling bottomUp">(Keep scrolling to learn more about me.)</p>
      </div>
    )
  }
}

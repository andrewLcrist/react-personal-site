import React, { Component } from 'react'
import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'
import image4 from '../images/4.png'

export default class WelcomePane extends Component{
  constructor(){
    super()
    this.state = {
      picture: 1
    }
  }

  componentDidMount() {
    setInterval(() => this.changePicture(), 1000)
    window.addEventListener('scroll', this.checkForAnimationStatus)
  }

  changePicture() {
    this.state.picture === 4 ?
      this.setState({picture: 1})
      : this.setState({picture: this.state.picture + 1})
  }

  checkForAnimationStatus() {
    var container1 = document.getElementById('container1');
    var container2 = document.getElementById('container2');
    var container1DistanceToTop = container1.getBoundingClientRect().top + (window.innerHeight/5);
    var container2DistanceToTop = container2.getBoundingClientRect().top;

    if(container2DistanceToTop < container1DistanceToTop) this.setState({loop: false})
  }

  render() {
    return(
      <div id="container1">
        <h1 className="topDrop">Hi, I'm Andrew.</h1>
        <img id="bitmoji" src={require(`../images/${this.state.picture}.png`)}/>
        <p className="keep-scrolling bottomUp">(Keep scrolling to learn more about me.)</p>
      </div>
    )
  }
}

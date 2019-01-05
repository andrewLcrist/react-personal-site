import React, { Component } from 'react'
import * as images from '../constants/constants'

export default class Lines extends Component{
  constructor(){
    super()
    this.state = {
      picture: 1,
      loop: false,
      windowInnerWidth: '',
      windowInnerHeight: '',
      totalLogos: 200,
      logosFactoryArray: []
    }
  }

  componentDidMount() {
    const {
      innerWidth,
      innerHeight,
      addEventListener
    } = window

    this.setState({
      windowInnerWidth: innerWidth,
      windowInnerHeight: innerHeight
    })
    addEventListener('scroll', this.checkForAnimationStatus)
    this.init()
  }

  init = () => {
    function Factory(){
      const colors = ['#4285f4','#34a853','#fbbc05','#ea4335']
      let randoNumber = Math.round( Math.random() * 4)
      this.x =  window.innerWidth / 2
      this.y =  window.innerHeight / 2
      this.color = colors[randoNumber]
      this.vx = Math.random() * 3 - 1.5
      this.vy = Math.random() * 3 - 1.5
    }

    for(let i = 0; i < this.state.totalLogos; i++){
      this.setState(prevState => ({logosFactoryArray: [...prevState.logosFactoryArray, new Factory()]}))
    }
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

  allTheCanvas() {
    const animate = this.state.loop
    const totalLogos = this.state.totalLogos
    const logosFactoryArray = this.state.logosFactoryArray
    canvas.width = window.innerWidth
    canvas.height = this.state.windowInnerHeight
  }

  calcDistance = (p1,p2) => {
    return Math.sqrt( Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) )
  }

  draw = () => {
    const {
      windowInnerHeight,
      windowInnerWidth,
      totalLogos,
      logosFactoryArray
    } = this.state

    const canvas = this.refs.canvas && this.refs.canvas
    canvas.width = windowInnerWidth
    canvas.height = windowInnerHeight
    const ctx = canvas.getContext('2d')
    const w = windowInnerWidth
    const h = windowInnerHeight
    ctx.clearRect(0, 0, w, h)
    ctx.globalCompositeOperation = 'source-over'
    for(let i = 0; i < totalLogos; i++){
      let logo = logosFactoryArray[i]

      for(let j = 0; j<totalLogos; j++){

        let logo2 = logosFactoryArray[j]

        if(logo.color == logo2.color && this.calcDistance(logo, logo2) < 200){
          ctx.strokeStyle = logo.color
          ctx.beginPath()
          ctx.lineWidth = 1.5
          ctx.moveTo(logo.x, logo.y)
          ctx.lineTo(logo2.x, logo2.y)
          ctx.stroke()
        }
      }

      logo.x += logo.vx
      logo.y += logo.vy

      if(logo.x > w - 1)logosFactoryArray[i].vx = -logo.vx
      if(logo.x < 1) logosFactoryArray[i].vx = -logo.vx
      if(logo.y > h - 1)logosFactoryArray[i].vy = -logo.vy
      if(logo.y < 1)logosFactoryArray[i].vy = -logo.vy
    }
  }

  requestAnimFrame = () => {
    return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame
  }

  cancelAnimFrame = () => {
    return  window.cancelAnimationFrame       ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame
  }

  loop = () => {
    this.draw()
    if(this.state.loop){
      this.requestAnimFrame()(this.loop)
    }
  }

  stopLoop = () => {
    this.cancelAnimFrame()(this.requestAnimFrame()(this.loop))
  }

  render() {
    return(
      <div id="linesContainer" ref="container2">
        <canvas ref='canvas' id="canvas2"></canvas>
        {this.state.loop ? this.loop() : this.stopLoop()}
        <div id="connectContainer">
        <div id="connectBackground"></div>
          <div className="andrewContainer">
            <img id="andrew" src={images.andrew} alt="Andrew professional picture"/>
          </div>
          <div className="contactCard">
            <h3>I'm Andrew Crist</h3>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h4>Connect with me.</h4>
            <div style={{display: 'flex'}}>
              <a href="https://github.com/andrewLcrist" target="_blank" >
              <img
                className="socialLogo"
                src={images.github}
              />
              </a>
              <a href="https://www.linkedin.com/in/andrew-crist/" target="_blank">
              <img
                className="socialLogo"
                src={images.linkedin}
              />
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

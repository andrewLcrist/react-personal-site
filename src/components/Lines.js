import React, { Component } from 'react'

export default class Lines extends Component{
  constructor(){
    super()
    this.state = {
      picture: 1,
      loop: false,
      windowInnerWidth: '',
      windowInnerHeight: '',
      totalLogos: 300,
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
    // this.allTheCanvas()
  }

  init = () => {
    function Factory(){
      const colors = ['#FA8C99','#f9eb97','#EDFA8C','#A6FA8C', '#8CF3FA', '#e2bbfd', '#994882', '#8f064c', '#c0d9d4', '#6d7eb4', '#0bc1aa', '#ff5139', '#9334fb', '#000000']
      let randoNumber = Math.round( Math.random() * 14)
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
    var container2 = document.getElementById('container2')
    var container2DistanceToTop = container2.getBoundingClientRect().top

    if(container2DistanceToTop < this.state.windowInnerHeight && !this.state.loop) {
      this.setState({loop: true})
    }
    if(container2DistanceToTop > this.state.windowInnerHeight && this.state.loop) {
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

    let canvas = this.refs.canvas && this.refs.canvas
    canvas.width = windowInnerWidth
    canvas.height = windowInnerHeight
    let ctx = canvas.getContext('2d')
    let w = windowInnerWidth
    let h = windowInnerHeight
    ctx.clearRect(0, 0, w, h)
    ctx.globalCompositeOperation = 'source-over'
    for(var i = 0; i < totalLogos; i++){
      var logo = logosFactoryArray[i]

      for(var j = 0; j<totalLogos; j++){

        var logo2 = logosFactoryArray[j]

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
      <div id="container2" ref="container2">
      <canvas ref='canvas' id="canvas2"></canvas>
      {this.state.loop ? this.loop() : this.stopLoop()}
      </div>
    )
  }
}

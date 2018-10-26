import React, { Component } from 'react'
import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'
import image4 from '../images/4.png'

export default class Application extends Component{
  constructor(){
    super()
    this.state = {
      picture: 1
    }
  }

  componentDidMount() {
    setInterval(() => this.changePicture(), 1000)
    this.allTheCanvas()
  }

  changePicture() {
    this.state.picture === 4 ?
      this.setState({picture: 1})
      : this.setState({picture: this.state.picture + 1})
  }

  allTheCanvas() {
    let canvas = this.refs.canvas && this.refs.canvas
    let ctx = canvas.getContext('2d')
    let logosFactoryArray = []
    let w = window.innerWidth
    let h = window.innerHeight
    let totalLogos = 1
    let colors = ['#FA8C99','#f9eb97','#EDFA8C','#A6FA8C', '#8CF3FA', '#e2bbfd', '#994882', '#8f064c', '#c0d9d4', '#6d7eb4', '#0bc1aa', '#ff5139', '#9334fb', '#000000']

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    function Factory(){
      let randoNumber = Math.round( Math.random() * 14)
      this.x =  w / 2
      this.y =  h / 2
      this.rgba = colors[ randoNumber ]
      this.vx = Math.random() * 3 - 1.5
      this.vy = Math.random() * 3 - 1.5
    }

    function draw(){
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'source-over'
      for(var i = 0; i < totalLogos; i++){
        var logo = logosFactoryArray[i]

        // for(var j = 0; j<totalLogos; j++){
        //
        //    var logo2 = logosFactoryArray[j]
        //
        //    if(logo.rgba == logo.rgba && calcDistance(logo, logo2) < 200){
        //       ctx.strokeStyle = logo.rgba
        //       ctx.beginPath()
        //       ctx.lineWidth = 1.5
        //       ctx.moveTo(logo.x, logo.y)
        //       ctx.lineTo(logo2.x, logo2.y)
        //       ctx.stroke()
        //    }
        // }

        ctx.beginPath();
        ctx.strokeStyle="purple"; // Purple path
        ctx.arc(logo.x,logo.y,50,0,2*Math.PI)
        ctx.stroke(); // Draw it


        manageDirection(logo, i)
        // logo.x += logo.vx
        // logo.y += logo.vy

        // if(logo.y + 26 === h)logo.x += logo.vy
        // if(logo.x < 0)logo.x = w
        // if(logo.y > h)logo.y = 0
        // if(logo.y < 0)logo.y = h
      }
    }

    function manageDirection(logo, i) {
      console.log(logosFactoryArray[i])
      logo.y += logo.vy
      if(logo.y + 26 > h)logosFactoryArray[i].vy = -logo.vy
      if(logo.y + 26 < 0)logosFactoryArray[i].vy = -logo.vy
      console.log(logo.vy)

    }

    function calcDistance(p1,p2) {
      return Math.sqrt( Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) )
    }

    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60)
              }
    })();

    (function init(){
      for(var i = 0; i < totalLogos; i++){
        logosFactoryArray.push(new Factory)
      }
    })();

    (function loop(){
      draw()
      requestAnimFrame(loop)
    })();

  }

  render() {
    let styles = {width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            display: "flex"}
    return(
      <div style={styles}>
        <canvas ref='canvas'></canvas>
        <img src={require(`../images/${this.state.picture}.png`)}/>
      </div>
    )
  }
}

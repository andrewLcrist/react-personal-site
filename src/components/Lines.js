import React, { Component } from 'react'
import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'
import image4 from '../images/4.png'

export default class Lines extends Component{
  constructor(){
    super()
    this.state = {
      picture: 1
    }
  }

  componentDidMount() {
    setInterval(() => this.changePicture(), 1000)
    this.allTheCanvas()
    window.addEventListener('scroll', this.backgroundScroll)
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
    let totalLogos = Math.round((w * h) / 1800)
    let colors = ['#FA8C99','#f9eb97','#EDFA8C','#A6FA8C', '#8CF3FA', '#e2bbfd', '#994882', '#8f064c', '#c0d9d4', '#6d7eb4', '#0bc1aa', '#ff5139', '#9334fb', '#000000']

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    function Factory(){
      let randoNumber = Math.round( Math.random() * 14)
      this.x =  w / 2
      this.y =  h / 2
      this.color = colors[ randoNumber ]
      this.vx = Math.random() * 3 - 1.5
      this.vy = Math.random() * 3 - 1.5
    }

    function draw(){
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'source-over'
      for(var i = 0; i < totalLogos; i++){
        var logo = logosFactoryArray[i]

        for(var j = 0; j<totalLogos; j++){

           var logo2 = logosFactoryArray[j]

           if(logo.color == logo2.color && calcDistance(logo, logo2) < 200){
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

  backgroundScroll(e) {
   var container2 = document.getElementById('container2');
   var distanceToTop = container2.getBoundingClientRect().top;

   let opacity = 1 - (distanceToTop / window.innerHeight)

   container2.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`
  }

  render() {
    return(
      <div id="container2" ref="container2">
        <canvas ref='canvas' id="canvas2"></canvas>
      </div>
    )
  }
}

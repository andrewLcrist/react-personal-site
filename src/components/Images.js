import React, { Component } from 'react'
import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'
import image4 from '../images/4.png'
import l1 from '../images/css3.png'
import l2 from '../images/ember.png'
import l3 from '../images/git.png'
import l4 from '../images/HTML_Logo.png'
import l5 from '../images/java.png'
import l6 from '../images/javascript.png'
import l7 from '../images/jest.png'
import l8 from '../images/Octocat.png'
import l9 from '../images/react.png'
import l10 from '../images/redux.png'
import l11 from '../images/sass.png'
import l12 from '../images/spring.png'
import l13 from '../images/webpack.png'
import l14 from '../images/jenkins.png'
import l15 from '../images/docker.jpg'

export default class Images extends Component{
  constructor(){
    super()
    this.state = {
      picture: 1,
      loop: true,
      logosFactoryArray: this.init(this),
      totalLogos: this.dingo(),
      width: window.innerWidth,
      height: window.innerHeight
    }
    gravity: 'poop'
  }

  componentDidMount() {
    this.initiateCanvas(this.state)
    window.addEventListener('scroll', this.checkForAnimationStatus)
  }

  dingo = () => 90

  init = (barg) => {
    let totalLogos = this.dingo()
    let logosFactoryArray = []
    for(var i = 0; i < totalLogos; i++){
      logosFactoryArray.push(new this.Factory(barg))
    }
    return logosFactoryArray
  }

  Factory(barg){
    const colors = ['#FA8C99','#f9eb97','#EDFA8C','#A6FA8C', '#8CF3FA', '#e2bbfd', '#994882', '#8f064c', '#c0d9d4', '#6d7eb4', '#0bc1aa', '#ff5139', '#9334fb', '#000000']

    const logos = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15]

    let randomNumber = Math.round( Math.random() * 14)
    this.x = window.innerWidth / 2
    this.y = window.innerHeight / 2
    this.rgba = colors[ randomNumber ]
    let randoImg = logos[ randomNumber ]
    this.vx = Math.random() * 3 - 1.5
    this.vy = Math.random() * 3 - 1.5
    const img = new Image()
    img.src = randoImg
    this.img = img
  }

  initiateCanvas(state) {
    const w = state.width
    const h = state.height

    let canvas = this.refs.canvas2 && this.refs.canvas2
    let ctx = canvas.getContext('2d')
    canvas.width = w
    canvas.height = h

    this.loop(ctx, state)
  }

  startLoop = (function(loop, ctx, state, w, h){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame
            loop(ctx, state, w, h)
  })();

  loop = (ctx, state, w, h) => {
    this.draw(ctx, state, w, h)
    this.requestAnimFrame( this.loop, ctx, state, w, h )
  }

  calcDistance(p1,p2) {
    return Math.sqrt( Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) )
  }

  draw = (ctx, state, w, h) => {
    ctx.clearRect(0, 0, state.width, state.height)
    ctx.globalCompositeOperation = 'source-over'
    for(var i = 0; i < state.totalLogos; i++){
      var logo = state.logosFactoryArray[i]

      for(var j = 0; j < state.totalLogos; j++){

         var logo2 = state.logosFactoryArray[j]
         ctx.linewidth = 0.5

         if(logo.img.src == logo2.img.src && this.calcDistance(logo, logo2) < 200){
            ctx.strokeStyle = logo.rgba
            ctx.beginPath()
            ctx.lineWidth = 1.5
            ctx.moveTo(logo.x, logo.y)
            ctx.lineTo(logo2.x, logo2.y)
            ctx.stroke()
         }
      }

      const img = new Image()
      img.src = logo.img
      ctx.drawImage(logo.img, logo.x - 25, logo.y - 25, 50, 50)

      logo.x += logo.vx
      logo.y += logo.vy

      if(logo.x + 25> w - 1) state.logosFactoryArray[i].vx = -logo.vx
      if(logo.x -25 < 1)  state.logosFactoryArray[i].vx = -logo.vx
      if(logo.y + 25 > h - 1) state.logosFactoryArray[i].vy = -logo.vy
      if(logo.y - 25< 1) state.logosFactoryArray[i].vy = -logo.vy
    }
  }

  checkForAnimationStatus = () => {
    var container1 = document.getElementById('container1');
    var container2 = document.getElementById('container2');
    var container1DistanceToTop = container1.getBoundingClientRect().top + (window.innerHeight/5);
    var container2DistanceToTop = container2.getBoundingClientRect().top;

    if(container2DistanceToTop < container1DistanceToTop) this.setState({loop: false})
    if(container2DistanceToTop > container1DistanceToTop) this.setState({loop: true})
  }

  render() {
    return(
      <div id="container1">
        <canvas ref='canvas2' id="canvas1"></canvas>
      </div>
    )
  }
}

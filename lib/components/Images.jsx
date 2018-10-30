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
    let canvas = this.refs.canvas2 && this.refs.canvas2
    let ctx = canvas.getContext('2d')
    let logosFactoryArray = []
    let totalLogos = 1
    let w = window.innerWidth
    let h = window.innerHeight

    let colors = ['#FA8C99','#f9eb97','#EDFA8C','#A6FA8C', '#8CF3FA', '#e2bbfd', '#994882', '#8f064c', '#c0d9d4', '#6d7eb4', '#0bc1aa', '#ff5139', '#9334fb', '#000000']
    let logos = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15]

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    function Factory(){
      let randoNumber = Math.round( Math.random() * 14)
      this.x =  w / 2
      this.y =  h / 2
      this.rgba = colors[ randoNumber ]
      let randoImg = logos[ randoNumber ]
      this.vx = Math.random() * 3 - 1.5
      this.vy = Math.random() * 3 - 1.5
      const img = new Image()
      img.src = randoImg
      this.img = img
    }

    function draw(){
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'source-over'
      for(var i = 0; i < totalLogos; i++){
        var logo = logosFactoryArray[i]

        for(var j = 0; j<totalLogos; j++){

           var logo2 = logosFactoryArray[j]
           ctx.linewidth = 0.5

           if(logo.img.src == logo2.img.src && calcDistance(logo, logo2) < 200){
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

        if(logo.x + 25> w - 1)logosFactoryArray[i].vx = -logo.vx
        if(logo.x -25 < 1) logosFactoryArray[i].vx = -logo.vx
        if(logo.y + 25 > h - 1)logosFactoryArray[i].vy = -logo.vy
        if(logo.y - 25< 1)logosFactoryArray[i].vy = -logo.vy
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

  render() {
    return(
      <div id="container1">
        <canvas ref='canvas2' id="canvas1"></canvas>
        <img id="bitmoji" src={require(`../images/${this.state.picture}.png`)}/>
      </div>
    )
  }
}

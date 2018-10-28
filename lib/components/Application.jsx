import React, { Component } from 'react'
import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'
import image4 from '../images/4.png'

export default class Application extends Component{

  componentDidMount() {
    this.drawPicture()
    // this.allTheCanvas()
  }

  drawPicture() {
    let canvas = this.refs.backgroundCanvas && this.refs.backgroundCanvas
    let ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    let w = window.innerWidth
    let h = window.innerHeight

    function drawBackgroundImage() {
      const img = new Image()
      img.src = 'https://c.pxhere.com/photos/70/62/galaxy_milky_way_mountain_nature_night_scenic_silhouette_sky-914889.jpg!d'
      ctx.drawImage(img, 0, 0, w, h)
    }

    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60)
              }
    })();

    (function loop(){
      // drawBackgroundImage()
      // drawShapes()
      drawBackgroundImage()
      // drawCurtain()
      // drawCrist()
      requestAnimFrame(loop)
    })();
  }

  allTheCanvas() {
    let canvas = this.refs.canvas && this.refs.canvas
    let ctx = canvas.getContext('2d')
    // ctx.globalCompositeOperation = 'xor'
    let logosFactoryArray = []
    let w = window.innerWidth
    let h = window.innerHeight
    let totalLogos = 10
    let smallestView = w > h ? h : w
    let radius = 75
    let colors = ['#FA8C99','#f9eb97','#EDFA8C','#A6FA8C', '#8CF3FA', '#e2bbfd', '#994882', '#8f064c', '#c0d9d4', '#6d7eb4', '#0bc1aa', '#ff5139', '#9334fb', '#000000']

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    function Factory(){
      let randoNumber = Math.round( Math.random() * 14)
      this.x =  w / 2
      this.y =  h / 2
      // this.color = colors[ randoNumber ]
      this.color = "black"
      this.vx = Math.random() * 15 - 7.5
      this.vy = Math.random() * 10 - 5
    }

    // function drawShapes(){
    //   ctx.clearRect(0, 0, w, h)
    //   ctx.globalCompositeOperation = 'xor'
    //   for(var i = 0; i < totalLogos; i++){
    //     var logo = logosFactoryArray[i]
    //
    //     ctx.beginPath();
    //     ctx.strokeStyle = logo.color
    //     ctx.arc(logo.x,logo.y, radius, 0, 2*Math.PI)
    //     ctx.fillStyle = logo.color
    //     ctx.fill()
    //     ctx.stroke();
    //
    //     manageDirection(logo, i)
    //   }
    // }



    function drawCurtain() {
      ctx.fillRect(0,0,w,h)
      ctx.clearRect(0,0,50,50)
      // drawBackgroundImage()
    }

    // function drawCrist() {
    //   ctx.font = `90px Arial`
    //   ctx.fillStyle = "black"
    //   ctx.fillText("C R I S T", 10, (h / 2) - 45);
    // }

    // function manageDirection(logo, i) {
    //   console.log(logo.x)
    //   logo.x += logo.vx
    //   logo.y += logo.vy
    //   if(logo.y + radius > h - 1)logosFactoryArray[i].vy = -logo.vy
    //   if(logo.y - radius < 1)logosFactoryArray[i].vy = -logo.vy
    //   if(logo.x - radius < 1)logosFactoryArray[i].vx = -logo.vx
    //   if(logo.x + radius > w - 1)logosFactoryArray[i].vx = -logo.vx
    // }

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
      // drawBackgroundImage()
      // drawShapes()
      // drawBackgroundImage()
      drawCurtain()
      // drawCrist()
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
        <canvas ref='backgroundCanvas'></canvas>
      </div>
    )
  }
}

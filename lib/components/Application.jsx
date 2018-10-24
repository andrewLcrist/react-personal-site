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
    let particles = []
    let patriclesNum = 350
    let w = window.innerWidth
    let h = window.innerHeight
    let colors = ['#FA8C99','#f9eb97','#EDFA8C','#A6FA8C', '#8CF3FA', '#e2bbfd'];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

  function Factory(){
    this.x =  Math.round( Math.random() * w);
    this.y =  Math.round( Math.random() * h);
    this.rad = Math.round( Math.random() * 1) + 1;
    this.rgba = colors[ Math.round( Math.random() * 5) ];
    this.vx = Math.round( Math.random() * 2.5) - 1.3;
    this.vy = Math.round( Math.random() * 2.5) - 1.3;
  }

  function draw(){
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    for(var i = 0;i < patriclesNum; i++){
      var dot = particles[i];
      var factor = 1;

      for(var j = 0; j<patriclesNum; j++){

         var dot2 = particles[j];
         ctx.linewidth = 0.5;

         if(dot.rgba == dot2.rgba && calcDistance(dot, dot2)<100){
            ctx.strokeStyle = dot.rgba;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.stroke();
            factor++;
         }
      }


    ctx.fillStyle = dot.rgba;
    ctx.strokeStyle = dot.rgba;

    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.rad*factor, 0, Math.PI*2, true);
    ctx.fill();
    ctx.closePath();

    dot.x += dot.vx;
    dot.y += dot.vy;

    if(dot.x > w)dot.x = 0;
    if(dot.x < 0)dot.x = w;
    if(dot.y > h)dot.y = 0;
    if(dot.y < 0)dot.y = h;
  }
}

function calcDistance(p1,p2){
  return Math.sqrt( Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) );
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

(function init(){
  for(var i = 0; i < patriclesNum; i++){
    particles.push(new Factory);
  }
})();

(function loop(){
  draw();
  requestAnimFrame(loop);
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
      <div style={styles}
      >
        <canvas ref='canvas'></canvas>
        <img src={require(`../images/${this.state.picture}.png`)}/>
        {/* {this.allTheCanvas()} */}
        <p>coming soon</p>
      </div>
    )
  }
}

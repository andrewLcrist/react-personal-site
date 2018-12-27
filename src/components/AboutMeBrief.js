import React, {Component} from 'react'
import thinking from '../images/1.png'

export class AboutMeBrief extends Component {
  calcPrevious() {
    return window.scrollY
  }

  render() {
    let lastScrollTop = 0

    window.addEventListener("scroll", function(){
      const fadePane = document.getElementById('fadePane');
      const container2 = document.getElementById('container2')

      const distanceToTop = fadePane.getBoundingClientRect().top;
      const opacity = (1 - (distanceToTop / window.innerHeight))

      fadePane.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`

      let st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop && distanceToTop <= -window.innerHeight/2){
        fadePane.style.position = 'fixed'
        fadePane.style.top = '0'
        fadePane.style.height = '100vh'
      } else if ( st < lastScrollTop && container2.getBoundingClientRect().top >= window.innerHeight){
        fadePane.style.position = 'absolute'
        fadePane.style.top = '100vh'
        fadePane.style.height = '150vh'
      }
      lastScrollTop = st <= 0 ? 0 : st
    })

    return (
      <div id="fadePane">
        <img id="thinking" src={thinking} />
      </div>
    )
  }
}

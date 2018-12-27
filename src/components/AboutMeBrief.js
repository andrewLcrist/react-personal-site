import React, {Component} from 'react'
import thinking from '../images/1.png'

export class AboutMeBrief extends Component {
  calcPrevious() {
    return window.scrollY
  }

  render() {
    let lastScrollTop = 0

    window.addEventListener("scroll", function(){
      const aboutMeContainerBack = document.getElementById('aboutMeContainerBack');
      const aboutMeContainer = document.getElementById('aboutMeContainer');
      const linesContainer = document.getElementById('linesContainer')

      const distanceToTop = linesContainer.getBoundingClientRect().top;
      console.log('distanceToTop', distanceToTop);
      console.log('innerHeight', window.innerHeight);
      const opacity = (1 - (distanceToTop / window.innerHeight))
      console.log(opacity);

      aboutMeContainerBack.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`

      let st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop && distanceToTop <= window.innerHeight){
        aboutMeContainer.style.position = 'fixed'
        aboutMeContainer.style.top = '0'
        aboutMeContainer.style.height = '100vh'
      } else if ( st < lastScrollTop && linesContainer.getBoundingClientRect().top >= window.innerHeight){
        aboutMeContainer.style.position = 'absolute'
        aboutMeContainer.style.top = '100vh'
        aboutMeContainer.style.height = '150vh'
      }
      lastScrollTop = st <= 0 ? 0 : st
    })

    return (
      <div id="aboutMeContainer">
      <div id="aboutMeContainerBack" style={{width: '100%', height: '100%', zIndex: 1, position: 'absolute'}} > </div>
        <div id="aboutMeInnerContainer">
          <p id="aboutMeText">I'm a fullstack software engineer with a history in project management.</p>
          <img id="thinking" src={thinking} />
        </div>
      </div>
    )
  }
}

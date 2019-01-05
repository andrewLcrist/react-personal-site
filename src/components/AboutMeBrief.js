import React, {Component} from 'react'
import * as images from '../constants/constants'

export class AboutMeBrief extends Component {
  calcPrevious() {
    return window.scrollY
  }

  render() {
    let lastScrollTop = 0

    window.addEventListener("scroll", function(){
      const aboutMeContainerBack = document.getElementById('aboutMeContainerBack');
      const aboutMeContainer = document.getElementById('aboutMeContainer');
      const outsideWorkContainer = document.getElementById('outsideWorkContainer')

      const aboutMeContainerDistanceToTop = aboutMeContainer.getBoundingClientRect().top;
      const outsideWorkContainerDistanceToTop = outsideWorkContainer.getBoundingClientRect().top;
      const opacity = (1 - (outsideWorkContainerDistanceToTop / window.innerHeight))

      aboutMeContainerBack.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`

      let st = window.pageYOffset || document.documentElement.scrollTop


      if (st > lastScrollTop && outsideWorkContainerDistanceToTop <= window.innerHeight){
        aboutMeContainer.style.position = 'fixed'
        aboutMeContainer.style.top = '0'
      } else if ( st < lastScrollTop && outsideWorkContainer.getBoundingClientRect().top >= window.innerHeight){
        aboutMeContainer.style.position = 'absolute'
        aboutMeContainer.style.top = '100vh'
      }
      lastScrollTop = st <= 0 ? 0 : st
    })

    return (
      <div id="aboutMeContainer">
      <div id="aboutMeContainerBack" style={{width: '100%', height: '100%', zIndex: 1, position: 'absolute'}} > </div>
        <div id="aboutMeInnerContainer">
          <div id="aboutMeTextContainer">
            <div className="aboutMeFlex">
              <p className="aboutMeFlexLeft">I'm a</p>
              <p className="aboutMeFlexRight popText popRed">fullstack software engineer</p>
            </div>
            <div className="aboutMeFlex">
              <p className="aboutMeFlexLeft">with a history of</p>
              <p className="aboutMeFlexRight popText popOrange">project management</p>
            </div>
            <div className="aboutMeFlex">
              <p className="aboutMeFlexLeft">At the core, I enjoy</p>
              <p className="aboutMeFlexRight popText popBlue">leading teams</p>
            </div>
            <div className="aboutMeFlex">
              <p className="aboutMeFlexLeft"></p>
              <p className="aboutMeFlexRight popText popYellow">building culture</p>
            </div>
            <div className="aboutMeFlex">
              <p className="aboutMeFlexLeft">and</p>
              <p className="aboutMeFlexRight popText popGreen">creating meaningful solutions</p>
            </div>
          </div>
          <img id="thinking" src={images.briefcase} />
        </div>
      </div>
    )
  }
}

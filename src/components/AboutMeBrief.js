import React, {Component} from 'react'
import briefcase from '../images/briefcase.png'

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
      const opacity = (1 - (distanceToTop / window.innerHeight))

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
          <img id="thinking" src={briefcase} />
        </div>
      </div>
    )
  }
}

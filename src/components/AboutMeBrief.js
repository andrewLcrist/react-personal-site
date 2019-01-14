import React, {Component} from 'react'
import * as images from '../constants/constants'
import * as utils from '../utils/utils'

export class AboutMeBrief extends Component {
  calcPrevious() {
    return window.scrollY
  }

  render() {
    // utils.scrollListener('aboutMeContainerBack', 'aboutMeContainer', 'highlightedProjectContainer', '100vh')
    utils.scrollListener('aboutMeContainerBack', 'aboutMeContainer', 'outsideWorkContainer', '100vh')

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

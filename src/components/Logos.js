import React from 'react'
import linkedin from '../images/Linkedin.png'
import github from '../images/github.png'

export const Logos = () => {
  return (
  <div id="logosContainer" >
    <a href="https://github.com/andrewLcrist" target="_blank" >
    <img
      className="socialLogo"
      src={github}
    />
    </a>
    <a href="https://www.linkedin.com/in/andrew-crist/" target="_blank">
    <img
      className="socialLogo"
      src={linkedin}
    />
    </a>
  </div>
)
}

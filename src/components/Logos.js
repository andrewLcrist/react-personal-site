import React from 'react'
import * as images from '../constants/constants'

export const Logos = () => {
  return (
  <div id="logosContainer" >
    <a href="https://github.com/andrewLcrist" target="_blank" >
    <img
      className="socialLogo"
      src={images.github}
    />
    </a>
    <a href="https://www.linkedin.com/in/andrew-crist/" target="_blank">
    <img
      className="socialLogo"
      src={images.linkedin}
    />
    </a>
  </div>
)
}

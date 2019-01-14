import React, {Component} from 'react'
import * as images from '../constants/constants'
import * as utils from '../utils/utils'

export class HighlightedProject extends Component {

  render() {
    utils.scrollListener("highlightedProjectContainerBack", "highlightedProjectContainer", 'outsideWorkContainer', '200vh')

    return (
      <div id="highlightedProjectContainer">
      <div id="highlightedProjectContainerBack" style={{width: '100%', height: '100%', zIndex: 1, position: 'absolute'}} > </div>
      <h2 className="popRed" style={{marginBottom: '5rem'}}>Project</h2>

      </div>
    )
  }
}

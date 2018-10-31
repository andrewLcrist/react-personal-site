import React, { Component } from 'react'
import Images from './Images'
import Lines from './Lines'

export default class Application extends Component{
  render() {
    return(
      <div id="parent">
        <Images >
        </Images>
        <Lines />
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Application extends Component{
  render() {
    let styles = {width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"}
    return(
      <div style={styles}
      >
        <p>coming soon</p>
      </div>
    )
  }
}

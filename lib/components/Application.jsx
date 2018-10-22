import React, { Component } from 'react'
import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'
import image4 from '../images/4.jpg'

export default class Application extends Component{
  constructor(){
    super()
    this.state = {
      picture: 1
    }
  }

  componentDidMount() {
    setInterval(() => this.changePicture(), 1000)
  }

  changePicture() {
    this.state.picture === 4 ?
      this.setState({picture: 1})
      : this.setState({picture: this.state.picture + 1})
  }

  render() {
    let styles = {width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            display: "flex"}
    return(
      <div style={styles}
      >
        <img src={require(`../images/${this.state.picture}.jpg`)}/>
        <p>coming soon</p>
      </div>
    )
  }
}

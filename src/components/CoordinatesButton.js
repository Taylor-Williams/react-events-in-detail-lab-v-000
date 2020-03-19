// Code CoordinatesButton Component Here
import React from 'react'
export default class CoordinatesButton extends React.Component {

  getCoords = (event) => {
    let coords = [event.clientX, event.clientY]
    console.log("mouse coordinates: " + coords)
    this.props.onReceiveCoordinates = coords
  }
  render() {
    return <button onclick={this.getcoords} />
  }
}

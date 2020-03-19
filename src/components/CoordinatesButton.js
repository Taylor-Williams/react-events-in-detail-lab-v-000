// Code CoordinatesButton Component Here
import React from 'react'
export default class CoordinatesButton extends React.Component {

  getCoords = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  render() {
    return <button onclick={this.getcoords} />
  }
}

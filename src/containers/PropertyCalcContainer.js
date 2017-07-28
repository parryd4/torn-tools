import React, { Component } from 'react'

class PropertyCalcContainer extends Component {
  constructor() {
    super()

    this.state = {
      name: "Private Island",
      baseCost: 500000000
    }
  }
  render() {
    return (
      <p>{this.state.baseCost}</p>
    )
  }
}

export default PropertyCalcContainer

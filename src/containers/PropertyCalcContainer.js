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
      <div>
        <p>{this.state.baseCost}</p>
      </div>
    )
  }
}

export default PropertyCalcContainer

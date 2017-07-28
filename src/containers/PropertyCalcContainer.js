import React, { Component } from 'react'
import PropertyModification from '../components/PropertyModification'

const modifications = {
  hotTub: {cost: 17000, happy: 25},
  sauna: {cost: 12000, happy: 25},
  openBar: {cost: 9000, happy: 50},
  advancedShootingRange: {cost: 250000, happy: 50},
  medicalFacility: {cost: 17000000, happy: 50},
  airstripWithPlane: {cost: 75000000, happy: 250},
  privateYacht: {cost: 895000000, happy: 500},

  smPool: {cost: 35000, happy: 100},
  mdPool: {cost: 100000, happy: 125},
  lgPool: {cost: 500000, happy: 150},

  smVault: {cost: 20000000, happy: 50},
  mdVault: {cost: 42000000, happy: 75},
  lgVault: {cost: 98000000, happy: 100},
  xlVault: {cost: 215000000, happy: 125}
}

const properties = {
  privateIsland: {cost: 500000000, happy: 2000}
}

class PropertyCalcContainer extends Component {
  constructor() {
    super()

    this.state = {
      name: 'Private Island',
      education: false,
      elbt: false,
      propertyBroker: false,

      fullCost: properties.privateIsland.cost,
      adjustedCost: properties.privateIsland.cost,

    }

    // this.handleInputChange = this.handleInputChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.fullCost = this.fullCost.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleCheckboxChange(event) {
    this.setState({
      [event.target.name]: event.target.checked
    })

  }

  fullCost() {
    let total = properties.privateIsland.cost
    let options = this.state
    Object.keys(modifications).forEach(function(key) {
      if (options[key]){
        total += modifications[key]["cost"]
      }
    })

    let adjustment = total
    let upgrades = total - properties.privateIsland.cost
    if (this.state.education) {
      adjustment -= properties.privateIsland.cost / 20
    }
    if (this.state.elbt) {
      adjustment -= upgrades / 10
    }
    if (this.state.propertyBroker) {
      adjustment -= upgrades / 10
    }
    this.setState({
      fullCost: total,
      adjustedCost: adjustment
    })
    // return total
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.fullCost()
    }
  }

  render() {
    return (
      <div>
        <div className='propertyInfo'>
          <p>{this.state.name}</p>
          <p>Full Cost: $ {this.state.fullCost}</p>
          <p>Adjusted Cost: $ {this.state.adjustedCost}</p>
        </div>
        <div className='options'>
          <label>
            LAW 2910:
            <input name='education' type='checkbox' checked={this.state.education} onChange={this.handleCheckboxChange} />
          </label>
          <label>
            ELBT BB:
            <input name='elbt' type='checkbox' checked={this.state.elbt} onChange={this.handleCheckboxChange} />
          </label>
          <label>
            10* Property Broker
            <input name='propertyBroker' type='checkbox' checked={this.state.propertyBroker} onChange={this.handleCheckboxChange} />
          </label>
        </div>
        <div className='upgrades'>
          <label>
            Hot Tub
            <input name='hotTub' type='checkbox' checked={this.state.hotTub} onChange={this.handleCheckboxChange} />
            <br />Sauna
            <input name='sauna' type='checkbox' checked={this.state.sauna} onChange={this.handleCheckboxChange} />
            <br />Open Bar
            <input name='openBar' type='checkbox' checked={this.state.openBar} onChange={this.handleCheckboxChange} />
            <br />Advanced Shooting Range
            <input name='advancedShootingRange' type='checkbox' checked={this.state.advancedShootingRange} onChange={this.handleCheckboxChange} />
            <br />Medical Facility
            <input name='medicalFacility' type='checkbox' checked={this.state.medicalFacility} onChange={this.handleCheckboxChange} />
            <br />Airstrip With Plane
            <input name='airstripWithPlane' type='checkbox' checked={this.state.airstripWithPlane} onChange={this.handleCheckboxChange} />
            <br />Private Yacht
            <input name='privateYacht' type='checkbox' checked={this.state.privateYacht} onChange={this.handleCheckboxChange} />
          </label>

        </div>
      </div>
    )
  }
}

export default PropertyCalcContainer

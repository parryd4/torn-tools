import React, { Component } from 'react'
import Upgrade from './Upgrade'

class MeritCalculator extends Component {
  constructor() {
    super()

    this.state = {
      totalMerits: 0,
      spentMerits: 0,
      nerveBar: 0,
      criticalHitRate: 0,
      lifePoints: 0,
      crimeExperience: 0,
      educationLength: 0,
      awareness: 0,
      bankInterest: 0,
      masterfulLooting: 0,
      stealth: 0,
      hospitalizing: 0,
      braun: 0,
      protection: 0,
      sharpness: 0,
      evasion: 0,
      heavyArtillery: 0,
      machineGun: 0,
      rifle: 0,
      smg: 0,
      shotgun: 0,
      pistol: 0,
      club: 0,
      piercing: 0,
      slashing: 0,
      mechanical: 0,
      temporary: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.decrease = this.decrease.bind(this)
    this.increase = this.increase.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  decrease(event) {
    let upgradeLevel = this.state[event.target.name]
    if (upgradeLevel > 0) {
      let spent = this.state.spentMerits
      this.setState({
        [event.target.name]: upgradeLevel - 1,
        spentMerits: spent - upgradeLevel
      })
    }
  }

  increase(event) {
    let upgradeLevel = this.state[event.target.name]
    if (upgradeLevel < 10) {
      let spent = this.state.spentMerits
      this.setState({
        [event.target.name]: upgradeLevel + 1,
        spentMerits: spent + upgradeLevel + 1
      })
    }
  }

  render() {
    return (
      <div>
        <div className='totals'>
          <label>Total Merits: </label>
          <input type='text' name='totalMerits' value={this.state.totalMerits} onChange={this.handleChange} />
          <p>Available Merits: {this.state.totalMerits - this.state.spentMerits}</p>
        </div>

        <div className='upgrades'>
          <Upgrade name='nerveBar' value={this.state.nerveBar} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='criticalHitRate' value={this.state.criticalHitRate} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='lifePoints' value={this.state.lifePoints} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='crimeExperience' value={this.state.crimeExperience} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='educationLength' value={this.state.educationLength} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='awareness' value={this.state.awareness} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='bankInterest' value={this.state.bankInterest} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='masterfulLooting' value={this.state.masterfulLooting} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='stealth' value={this.state.stealth} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='hospitalizing' value={this.state.hospitalizing} increase={this.increase} decrease={this.decrease} />
        </div>

        <div className='stats'>
          <Upgrade name='braun' value={this.state.braun} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='protection' value={this.state.protection} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='sharpness' value={this.state.sharpness} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='evasion' value={this.state.evasion} increase={this.increase} decrease={this.decrease} />
        </div>

        <div className='weapons'>
          <Upgrade name='heavyArtillery' value={this.state.heavyArtillery} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='machineGun' value={this.state.machineGun} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='rifle' value={this.state.rifle} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='smg' value={this.state.smg} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='shotgun' value={this.state.shotgun} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='pistol' value={this.state.pistol} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='club' value={this.state.club} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='piercing' value={this.state.piercing} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='slashing' value={this.state.slashing} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='mechanical' value={this.state.mechanical} increase={this.increase} decrease={this.decrease} />
          <Upgrade name='temporary' value={this.state.temporary} increase={this.increase} decrease={this.decrease} />
        </div>
      </div>
    )
  }
}

export default MeritCalculator

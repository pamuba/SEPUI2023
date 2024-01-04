import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class HoverCounter extends Component {
  render() {
    const {count, name, incrementCount} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}> 
        {name} Hovered {count} Times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)
import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
      <>
        <h1>Welcome {this.props.name}</h1>
        <h1>{typeof(this.props)} has {Object.keys(this.props).length} keys</h1>
      </>
    )
  }
}

export default Welcome

// can we make logical decision using props, 
//example:  i have 1 prop or 2 prop or type of prop ? 
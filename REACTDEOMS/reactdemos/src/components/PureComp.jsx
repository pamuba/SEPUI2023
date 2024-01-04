import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log("####Pure Component#####")
    return (
      <div>Pure Component {this.props.name}</div>
    )
  }
}

export default PureComp
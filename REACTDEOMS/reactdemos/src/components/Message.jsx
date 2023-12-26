import React, { Component } from 'react'

export class Message extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Welcome to the Site',
       author: 'Server'
    }
  }
  changeMessage = () => {
    this.setState(
        {message:"Now you see me!"}
    )
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <h1>{this.state.author}</h1>
        <button onClick={this.changeMessage}>CLICK</button>
      </>
    )
  }
}

export default Message
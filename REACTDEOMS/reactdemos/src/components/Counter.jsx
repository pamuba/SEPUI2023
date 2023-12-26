import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
    this.incrementFive = this.incrementFive.bind(this)
  }
  increment(){
    this.setState(prevState => ({
        count : prevState.count + 1
    }),
    () => console.log('Callback Value:', this.state.count) 
    ) //async
    console.log(this.state.count)
  }
  incrementFive(){
    this.increment()  //1
    this.increment()  //2
    this.increment()  //3
    this.increment()  //4
    this.increment()  //5
    console.log(this)
  }
  render() {
    return (
      <>
        <h3>Count - {this.state.count}</h3>
        <button onClick={this.incrementFive}>Increment</button>
      </>
    )
  }
}

export default Counter
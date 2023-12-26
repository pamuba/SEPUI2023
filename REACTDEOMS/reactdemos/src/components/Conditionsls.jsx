import React, { Component } from 'react'

class Conditionsls extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false
    }
  }
  render() {
    return this.state.isLoggedIn &&  <h3>Hello User!!!</h3>
    // if(this.state.isLoggedIn){
    //     return <h3>Hello User!!!</h3>
    // }else{
    //     return <h3>Hello Guest!!</h3>
    // }
  }
}

export default Conditionsls
import React, { Component } from 'react'

class Form extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      username:''
   }
 }
 changeUserName = (event) => {
    this.setState({
        username: event.target.value
    })
 }
  render() {
    return (
      <form>
        <div>
            <label>Username</label>
            {/* controlled components */}
            <input type='text' value={this.state.username} onChange={this.changeUserName}/>
            {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
            {/* radiobuttons */}
            {/* comboboxes */}
            {/* submit */}
        </div>
      </form>
    )
  }
}

export default Form
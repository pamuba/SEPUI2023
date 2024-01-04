import React, { Component } from 'react'

class Form extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      username:'',
      comments:'',
      topic:''
   }
 }
 changeUserName = (event) => {
    this.setState({
        username: event.target.value
    })
 }
 changeComments = (event) => {
  this.setState({
      comments: event.target.value
  })
}
changeTopic = (event) => {
  this.setState({
      topic: event.target.value
  })
}

handleSubmit = (event) => {
  alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
  event.preventDefault()
}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            {/* controlled components */}
            <input type='text' value={this.state.username} onChange={this.changeUserName}/>
        </div>
        <div>
          <label>Comments</label>
          <textarea value={this.state.comments} onChange={this.changeComments}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.changeTopic}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vuejs">Vuejs</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
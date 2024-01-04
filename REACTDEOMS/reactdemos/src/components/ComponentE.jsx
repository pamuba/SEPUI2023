import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentE extends Component {
  render() {
    return (
      <div>Component E
        <UserConsumer>
            {
                (username) => {
                    return <h2>Hello {username}</h2>
                }
            }
        </UserConsumer>
      </div>
    )
  }
}

export default ComponentE
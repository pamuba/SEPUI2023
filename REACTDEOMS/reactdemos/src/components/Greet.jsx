import React, { Component } from 'react'

// export class Greet extends Component {
//   render() {
//     return (
//       <div>Hello World</div>
//     )
//   }
// }

function Greet(props) {
    return <>
                  <h1>Hello {props.name} aka {props.character}</h1>
                  {props.children}
            </>

    // return React.createElement('React.Fragment', null, 
    // React.createElement('h1', null, 'Hello World'));
}

export default Greet
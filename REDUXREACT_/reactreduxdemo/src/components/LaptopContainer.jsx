import React from 'react'
import { buyLaptop } from '../redux';
import { connect } from 'react-redux';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function LaptopContainer() {
  const dispatch = useDispatch()
  const numberOfLaptops = useSelector(state => state.numberOfLaptops)
  
  return (
    <div>
        <h2>Number Of Laptops - {numberOfLaptops}</h2>
        {/* <button onClick={props.buyLaptop}>Buy Laptop</button> */}
    </div>
  )
}
//Store.State => props of the Component
// const mapStateToProps = state => {
//   return {
//     numberOfLaptops: state.numberOfLaptops,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     buyLaptop: () => dispatch(buyLaptop())
//   }
// }

// export default connect(mapStateToProps, 
//   mapDispatchToProps)(LaptopContainer)



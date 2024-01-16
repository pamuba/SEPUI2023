import React from 'react'
import { connect } from 'react-redux';
import { buyLaptop } from '../redux';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
// } from "../redux/laptop/laptopReducer";

function LaptopContainer(props){
  // const numberOfLaptops = useSelector((state: RootState) => state.laptops.numberOfLaptops);
  // const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
        numberOfLaptops:{props.numOfLaptops}
        <h2>Number Of Laptops - {props.numOfLaptops}</h2>
        <button onClick={props.buyLaptop}>Buy Laptop</button>
    </div>
  )
}
//Store.State => props of the Component
const mapStateToProps = state => {
  console.log("State..",state)
  return {
    numOfLaptops: state.numOfLaptops,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyLaptop: () => dispatch(buyLaptop())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LaptopContainer)



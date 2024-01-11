import { BUY_LAPTOP } from './laptopTypes';

const initialLaptopState = {
    numOfLaptops:10
}

const laptopReducer = (state = initialLaptopState, action) => {
    switch(action.type){
        case BUY_LAPTOP : return {
            ...state,
            numOfLaptops: state.numOfLaptops - 1
        }
        default: return state
    }
}

export default laptopReducer

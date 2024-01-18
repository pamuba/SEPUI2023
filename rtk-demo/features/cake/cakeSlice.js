const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfCakes: 20
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: state => {
      //Immer
      state.numOfCakes--
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload
    }
  }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions

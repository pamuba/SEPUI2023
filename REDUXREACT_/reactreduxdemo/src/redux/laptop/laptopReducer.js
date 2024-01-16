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

// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// interface LaptopState {
//   numberOfLaptops: number;
// }

// const initialState: LaptopState = {
//   numberOfLaptops: 0,
// };

// const laptopSlice = createSlice({
//   name: "laptop",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.numberOfLaptops += 1;
//     },
//     decrement: (state) => {
//       state.numberOfLaptops -= 1;
//     },
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.numberOfLaptops += action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(incrementAsync.pending, () => {
//         console.log("incrementAsync.pending");
//       })
//       .addCase(
//         incrementAsync.fulfilled,
//         (state, action: PayloadAction<number>) => {
//           state.numberOfLaptops += action.payload;
//         }
//       );
//   },
// });

// export const incrementAsync = createAsyncThunk(
//   "laptop/incrementAsync",
//   async (amount: number) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return amount;
//   }
// );

// export const { increment, decrement, incrementByAmount } = laptopSlice.actions;

// export default laptopSlice.reducer;
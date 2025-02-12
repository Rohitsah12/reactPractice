import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './slice1'
const stores=configureStore({
    reducer:{
        slice1:CartReducer
    }
})

export default stores
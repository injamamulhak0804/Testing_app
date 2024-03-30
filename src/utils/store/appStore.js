import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './cartSlice'
import userReducer from './userSlice'

const appStore = configureStore({
    reducer:{
        cart: cardReducer,
        user: userReducer
    }
})

export default appStore;
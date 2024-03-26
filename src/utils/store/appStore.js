import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './cardSlice'
import userReducer from './userSlice'

const appStore = configureStore({
    reducer:{
        card: cardReducer,
        user: userReducer
    }
})

export default appStore;
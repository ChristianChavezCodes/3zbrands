import {configureStore} from "@reduxjs/toolkit";
import {toggleNameSlice} from '../slices/starWarsSlice.js'

const store = configureStore({
    reducer: {
        toggleNameSlice: toggleNameSlice.reducer,
    }
})

export default store
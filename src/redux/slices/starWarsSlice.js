import { createSlice } from "@reduxjs/toolkit";

const initialNameState = {
    name: 'Christian Skywalker'
}

const toggleNameSlice = createSlice({
    name: 'toggle',
    initialState: initialNameState,
    reducers: {
        toggleName(state, action){
            state.name = action.payload
        }
    }
})

const { actions: toggleNameActions } = toggleNameSlice;
export {toggleNameSlice, toggleNameActions}
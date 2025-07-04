import { createSlice } from "@reduxjs/toolkit";

const appslice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:false
    },
    reducers:{
        toggle:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
    }, 
})

export const{toggle}=appslice.actions;
export default appslice.reducer;
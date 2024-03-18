import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : null ,
    userData : null,
    accessToken : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login:(state , action) =>{
            state.status = true ;
            state.userData = action.payload ;
        },
        userAccessToken :(state ,action) =>{
             state.accessToken = action.payload;
        },
        logout:(state) =>{
            state.status = null ;
            state.userData = null ;
        }

    }
})

export const {login ,logout , userAccessToken} = authSlice.actions;

export default authSlice.reducer
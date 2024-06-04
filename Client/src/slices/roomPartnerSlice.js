import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    singleUser: null,
    allUser: null
}

const roomSlice = createSlice({
    name: "roomPartner",
    initialState,
    reducers: {
        userData : (state, action) =>{
            state.singleUser = action.payload
         },

        allPartner : (state, action) =>{
           state.allUser = action.payload
        }
    }
})

export const { allPartner, userData } = roomSlice.actions

export default roomSlice.reducer
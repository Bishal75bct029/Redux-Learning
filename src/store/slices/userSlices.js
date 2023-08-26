import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState : [],
    reducers:{
        addUser(state, action){
            state.push(action.payload)
        },

        deleteAll(state,action){

            state.splice(0, state.length);
            console.log(state,'nepali babu')
        },

        deleteSingle(state,action){
            state.splice(action.payload,1)
        }
    }

})

export const {addUser, deleteAll,deleteSingle} = userSlice.actions;
export default userSlice.reducer
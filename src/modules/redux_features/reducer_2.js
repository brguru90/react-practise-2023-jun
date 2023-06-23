import {createSlice} from "@reduxjs/toolkit"

export const reducer2Slice=createSlice({
    name:"state_2",
    initialState:{
        value:0,
    },
    reducers:{
        reset_state:()=> {},
        set_data:(state,action)=>{
            state.name=action?.payload?.name
            state.occupation=action?.payload?.occupation
        },
        update_state:(state,action)=>{
            Object.assign(state,action.payload)
        }
    }
})

export const {reset_state,set_data,update_state} =reducer2Slice.actions

export default reducer2Slice.reducer
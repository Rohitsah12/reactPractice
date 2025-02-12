import {createSlice} from '@reduxjs/toolkit'
//original object:Draft{Duplicate objet}:
//iMMER :New Draft krta hai
const reactSlicer=createSlice({
    name:"slice1",
    initialState:{count:0},
    reducers:{
        Increment:(state)=>{state.count=state.count+1},
        Decrement:(state)=>{state.count=state.count-1},
        Reset:(state)=>{state.count=0}
    }
})

export const{Increment,Decrement,Reset}=reactSlicer.actions
//actions:{type:"slice1/Increment",payload:undefined}
export default reactSlicer.reducer;
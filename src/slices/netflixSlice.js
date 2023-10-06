import { createSlice } from "@reduxjs/toolkit";


//creando objeto que sea el valor inicial de mi variable
const initialState = {
    titles: [],

};

export const netflixSlice=createSlice({
    name:"titles",
    initialState,
    reducers:{
        //crear las funciones para alterar el estado de titles
        setTitles:(state,action)=>{
            state.titles = action.payload
        }
    }
});

// siempre va .actions 
export const {setTitles} = netflixSlice.actions;

export default netflixSlice.reducer;


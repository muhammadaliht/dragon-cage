import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authentic: false,
  rename:false,
  remove:false,

  status: 'idle',
};




export const primalListSlice = createSlice({
  name: 'primalList',
  initialState,
  reducers: {
    setAuthentic: (state,action) => {
  
      state.authentic = action.payload;
    },

    setRename: (state,action) => {
  
      state.rename = action.payload;
    },

    setRemove: (state,action) => {
  
      state.remove = action.payload;
    },
  
  
  },

});

export const { setAuthentic,setRename,setRemove } = primalListSlice.actions;


export const selectAuthentic = (state) => state.primalList.authentic;
export const selectRename = (state) => state.primalList.rename;
export const selectRemove = (state) => state.primalList.remove;


export default primalListSlice.reducer;

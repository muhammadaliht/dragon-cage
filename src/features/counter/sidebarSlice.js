import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarValue:false,

  status: 'idle',
};




export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,

  reducers: {
    setSidebarValue: (state,action) => {
  
      state.sidebarValue = action.payload;
    },
  
  },

});

export const { setSidebarValue } = sidebarSlice.actions;


export const selectSidebarValue = (state) => state.sidebar.sidebarValue;


export default sidebarSlice.reducer;

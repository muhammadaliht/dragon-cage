import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addSnippet: false,
  status: 'idle',
};




export const addSnippetSlice = createSlice({
  name: 'snippet',
  initialState,

  reducers: {
    setAddSnippet: (state,action) => {
  
      state.addSnippet = action.payload;
    },
  
  },

});

export const { setAddSnippet } = addSnippetSlice.actions;

export const selectAddSnippet = (state) => state.snippet.addSnippet;

export default addSnippetSlice.reducer;

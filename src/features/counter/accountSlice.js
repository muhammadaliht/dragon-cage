import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newHandle: false,
  facebook:false,
  newAccount:false,

  status: 'idle',
};




export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setNewHandle: (state,action) => {
  
      state.newHandle = action.payload;
    },

    setFacebook: (state,action) => {
  
      state.facebook = action.payload;
    },
    setNewAccount: (state,action) => {
  
      state.newAccount = action.payload;
    },
  
  },

});

export const { setNewHandle,setFacebook,setNewAccount } = accountSlice.actions;

export const selectNewHandle = (state) => state.account.newHandle;
export const selectFacebook = (state) => state.account.facebook;
export const selectNewAccount = (state) => state.account.newAccount;

export default accountSlice.reducer;

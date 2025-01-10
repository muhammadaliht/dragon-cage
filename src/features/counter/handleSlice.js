import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  createHandle: false,
  chooseTemplate:false,
  customHandle:false,
  manageField:false,
  editLayer:false,

  status: 'idle',
};




export const handleSlice = createSlice({
  name: 'handle',
  initialState,

  reducers: {
     setCreateHandle: (state,action) => {
  
      state.createHandle = action.payload;
    },

    setChooseTemplate: (state,action) => {
  
        state.chooseTemplate = action.payload;
      },

      setCustomHandle: (state,action) => {
  
        state.customHandle = action.payload;
      },

      setManageField: (state,action) => {
  
        state.manageField = action.payload;
      },

      setEditLayer: (state,action) => {
  
        state.editLayer = action.payload;
      },
  
  },

});

export const { setCreateHandle,setChooseTemplate,setCustomHandle,setManageField,setEditLayer } = handleSlice.actions;

export const selectCreateHandle = (state) => state.handle.createHandle;
export const selectChooseTemplate = (state) => state.handle.chooseTemplate;
export const selectCustomHandle = (state) => state.handle.customHandle;
export const selectManageField = (state) => state.handle.manageField;
export const selectEditLayer = (state) => state.handle.editLayer;

export default handleSlice.reducer;

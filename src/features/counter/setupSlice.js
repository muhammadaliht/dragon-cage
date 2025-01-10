import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  collectInfo: false,
  generatingPre: false,
  encryptionPre:false, 
  preservingCred:false,
  firebaseConfig:false,
  password:false,
  failure:false,
  complete:false,
  

  status: 'idle',
};




export const setupSlice = createSlice({
  name: 'setup',
  initialState,
  reducers: {

    setCollectInfo: (state,action) => {
  
      state.collectInfo = action.payload ;
    },

    
    setGeneratingPre: (state,action) => {
  
      state.generatingPre = action.payload;
    },

    setEncryptionPre: (state,action) => {
  
      state.encryptionPre = action.payload;
    },

    setPreservingCred: (state,action) => {
  
      state.preservingCred = action.payload;
    },

    setFirebaseConfig:(state,action)=>{
      state.firebaseConfig = action.payload;

    },

    setPassword:(state,action)=>{
      state.password = action.payload;

    },
    setFailure:(state,action)=>{
      state.failure = action.payload;

    },
    setComplete:(state,action)=>{
      state.complete = action.payload;

    },

    resetSetup: () => initialState,

   
  
  },

});

export const { setCollectInfo,setGeneratingPre,setEncryptionPre,
  setPreservingCred,resetSetup,setFirebaseConfig,setPassword,setFailure,setComplete} = setupSlice.actions;


export const selectCollectInfo = (state) => state.setup.collectInfo;
export const selectGeneratingPre = (state) => state.setup.generatingPre;
export const selectEncryptionPre = (state) => state.setup.encryptionPre;
export const selectPreservingCred = (state) => state.setup.preservingCred;
export const selectFirebaseConfig = (state) => state.setup.firebaseConfig;
export const selectPassword = (state) => state.setup.password;
export const selectFailure = (state) => state.setup.failure;
export const selectComplete = (state) => state.setup.complete;


export default setupSlice.reducer;

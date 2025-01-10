import { configureStore } from '@reduxjs/toolkit';
import setupReducer from '../features/counter/setupSlice';
import primalListReducer from '../features/counter/primalListSlice';
import sidebarReducer from '../features/counter/sidebarSlice';
import accountReducer from '../features/counter/accountSlice';
import addSnippetReducer from '../features/counter/addSnippetSlice';
import handleReducer from '../features/counter/handleSlice';

export const store = configureStore({
  reducer: {
    setup: setupReducer,
    primalList:primalListReducer,
    sidebar:sidebarReducer,
    account:accountReducer,
    snippet:addSnippetReducer,
    handle:handleReducer,
  },
});

// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import modalSlice from './modalSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    modal: modalSlice
  }
});

export default store;

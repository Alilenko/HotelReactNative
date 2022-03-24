import { configureStore } from '@reduxjs/toolkit';
import user from './UserSlice'

export const store = configureStore({
  reducer: {
    user
  },
  devTools: process.env.NODE_ENV !== 'production'
});
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import authSlice from './slices/authSlice'

const store = configureStore({
   reducer: {
      authSlice: authSlice.reducer,
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store
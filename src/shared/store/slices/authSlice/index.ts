import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitStateTypes{
   isSigned: boolean
}

const initState: InitStateTypes = {
   isSigned: true,
}

const authSlice = createSlice({
   name: 'authSlice',
   initialState: initState,
   reducers: {
      login(state){
         state.isSigned = true
      },

      logout() {
         console.log('logout')
      }
   }
})

export const authActions = authSlice.actions
export default authSlice
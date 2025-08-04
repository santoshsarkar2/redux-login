import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
    reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      //localStorage.setItem('isAuthenticated', state.isAuthenticated);
    },
    logout: (state) => {
      state.isAuthenticated = false;
        state.user = null;
        //localStorage.removeItem('isAuthenticated');
    },
    register: (state, action) => {
      state.isAuthenticated = true;
        state.user = action.payload;
    },
  },
}); 
export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const userDetailsFromLocalStorage = JSON.parse(localStorage.getItem('userDetails'));

const initialState = {
  userDetails: userDetailsFromLocalStorage || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails(state, action) {
      state.userDetails = action.payload;
      localStorage.setItem('userDetails', JSON.stringify(action.payload));
    },
    clearUserDetails(state) {
      state.userDetails = null;
      localStorage.removeItem('userDetails');
    },
  },
});

export const { setUserDetails, clearUserDetails } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './auth-operations';
import { handlePending, handleRejected } from 'shared/functions/redux';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, handleRejected)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, state => {
        state.isLoading = false;
        state.token = '';
      })
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, state => {
        state.user = {};
        state.token = '';
        state.isLogin = false;
        state.isLoading = false;
      })
      .addCase(logout.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;

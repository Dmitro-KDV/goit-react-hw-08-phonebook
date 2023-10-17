import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, login, refreshUser } from 'components/services';

export const loginThunk = createAsyncThunk('/users/login', body => {
  const response = login(body);
  return response;
});

export const getProfileThunk = createAsyncThunk(
  '/users/logout',
  async token => {
    const response = await getProfile(token);
    return response.data;
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (persistedToken, thunkAPI) => {
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    const response = await refreshUser(persistedToken);
    return response;
  }
);

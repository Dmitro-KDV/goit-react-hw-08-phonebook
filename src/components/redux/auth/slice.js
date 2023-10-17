import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getProfileThunk, loginThunk, refreshUserThunk } from './operation';

const initialState = {
    token: '',
    isLoading: false,
    error: '',  
    profile: null,  
    isRefreshing: false,
}
const customArr = [loginThunk, getProfileThunk]

const fn = (status) => {
    return customArr.map((el) => el[status])
}

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
}

const handlePending = state => {
    state.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    state.token = payload.token;
    state.profile = payload;
};
const handleFulfilledProfile = (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    state.profile = payload;
};
const handlePendingRefresh = state => {
    state.isRefreshing = true;
};
const handleFulfilledRefresh = (state, { payload }) => {
    state.isLoading = true;
    state.error = null;
    state.profile = payload;
    state.isRefreshing = false;
};
const handleRejectedRefresh = (state, { payload }) => {
    state.isRefreshing = false;
    state.error = payload;
};
const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut(state){
            state.profile = null
            state.token = ''
        }
    },
    extraReducers: (builder) => {
        const {PENDING, REJECTED} = STATUS
        builder
            .addCase(loginThunk.fulfilled, handleFulfilled)
            .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
            .addCase(refreshUserThunk.fulfilled, handleFulfilledRefresh)
            .addCase(refreshUserThunk.pending, handlePendingRefresh)
            .addCase(refreshUserThunk.rejected, handleRejectedRefresh)
            .addMatcher(isAnyOf(...fn(PENDING)), handlePending)
            .addMatcher(isAnyOf(...fn(REJECTED)), handleRejected)
    },
})

export const authReduser = authSlice.reducer
export const {logOut} = authSlice.actions
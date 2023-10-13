import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getProfileThunk, loginThunk } from './operation';

const initialState = {
    token: '',
    isLoading: false,
    error: '',  
    profile: null,  
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
    // console.log(payload)
};
const handleFulfilledProfile = (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    state.profile = payload;
    // console.log(payload)
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
            .addMatcher(isAnyOf(...fn(PENDING)), handlePending)
            .addMatcher(isAnyOf(...fn(REJECTED)), handleRejected)
    },
})

export const authReduser = authSlice.reducer
export const {logOut} = authSlice.actions
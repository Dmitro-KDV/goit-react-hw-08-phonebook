import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, login } from "components/services";

export const loginThunk = createAsyncThunk('/users/login', (body) => {
    const response = login(body);
    // console.log('1 ===> '+response)
    return response;
});

export const getProfileThunk = createAsyncThunk('/users/logout', async(token) => {
    const response = await getProfile(token);
    // console.log(response)
    return response.data;
});
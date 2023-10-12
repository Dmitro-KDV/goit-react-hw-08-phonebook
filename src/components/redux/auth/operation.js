import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, login } from "components/services";

export const loginThunk = createAsyncThunk('/users/login', async(body) => {
    const response = await login(body);
    return response.data;
});

export const getProfileThunk = createAsyncThunk('/users/current', async() => {
    const response = await getProfile();
    return response.data;
});
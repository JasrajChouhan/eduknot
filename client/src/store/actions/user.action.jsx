// actions/user.action.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const asyncInfoOfUser = createAsyncThunk('user/asyncInfoOfUser', async () => {
    try {
        const response = await axios.get('/api/users');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});


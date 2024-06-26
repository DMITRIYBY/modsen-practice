import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {UserState} from "../../constants/types/redux.types.ts";


const initialState: UserState = {
    login: '',
    password: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ login: string; password: string }>) => {
            state.login = action.payload.login;
            state.password = action.payload.password;
        },
        clearUser: (state) => {
            state.login = '';
            state.password = '';
        }
    }
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

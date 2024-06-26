import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice.ts';
import filterReducer from './reducers/filterSlice.ts';

const store = configureStore({
    reducer: {
        user: userReducer,
        filter: filterReducer
    }
});

export default store;

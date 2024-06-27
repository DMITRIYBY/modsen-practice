import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import filterReducer from './reducers/filterSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        filter: filterReducer
    }
});

export default store;

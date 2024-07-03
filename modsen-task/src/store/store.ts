import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import filterReducer from './reducers/filterSlice';
import placesReducer from "./reducers/placesSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        filter: filterReducer,
        places: placesReducer
    }
});

export default store;
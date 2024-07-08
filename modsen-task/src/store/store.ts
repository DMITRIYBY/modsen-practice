import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import filterReducer from './reducers/filterSlice';
import placesReducer from "./reducers/placesSlice";
import favoritesReducer from "./reducers/favoritesSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        filter: filterReducer,
        places: placesReducer,
        favorites: favoritesReducer
    }
});

export default store;
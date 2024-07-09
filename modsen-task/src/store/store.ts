import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import filterReducer from './reducers/filterSlice';
import placesReducer from "./reducers/placesSlice";
import favoritesReducer from "./reducers/favoritesSlice";
import {thunk} from "redux-thunk";

const store = configureStore({
    reducer: {
        user: userReducer,
        filter: filterReducer,
        places: placesReducer,
        favorites: favoritesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export default store;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {FavoritesState} from "../../constants/types/redux.types";


const initialState: FavoritesState = {
    favorites: []
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavoritesList: (state, action: PayloadAction<Place[]>) => {
            state.favorites = action.payload;
        },
        clearFavoritesList: (state) => {
            state.favorites = []
        },
        addToFavorites: (state, action: PayloadAction<Place>) => {
            state.favorites.push(action.payload);
        }
    }
});

export const { setFavoritesList, clearFavoritesList, addToFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;

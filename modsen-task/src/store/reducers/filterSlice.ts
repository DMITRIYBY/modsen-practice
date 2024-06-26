import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {FilterState} from "../../constants/types/redux.types.ts";

const initialState: FilterState = {
    buildingType: '',
    radius: '1000',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<{ buildingType: string; radius: string }>) => {
            state.buildingType = action.payload.buildingType;
            state.radius = action.payload.radius;
        },
        clearFilter: (state) => {
            state.buildingType = '';
            state.radius = '';
        }
    }
});

export const { setFilter, clearFilter } = filterSlice.actions;

export default filterSlice.reducer;

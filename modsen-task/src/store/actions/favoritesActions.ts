import {addToFavorites, deleteFromFavoritesList} from "../reducers/favoritesSlice";
import {addFavoritePlace, deleteFavoritePlace} from "../../firestore";
import {AppDispatch} from "../store";

export const addPlaceToFavorites = (userId: string , place: Place) => async (dispatch: AppDispatch) => {
    try {
        await addFavoritePlace(userId, place.place_id);
        dispatch(addToFavorites(place));
    } catch (error) {
        console.error("Failed to delete place:", error);
    }
}
export const deletePlaceFromFavorites = (userId: string , placeId: string) => async (dispatch: AppDispatch) => {
    try {
        await deleteFavoritePlace(userId, placeId);
        dispatch(deleteFromFavoritesList(placeId));
    } catch (error) {
        console.error("Failed to delete place:", error);
    }
}
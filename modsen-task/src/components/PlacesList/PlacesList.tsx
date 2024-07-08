import { PlaceCard, PlaceMineature, PlacesListContainer } from "./PlacesList.styles";
import { TextBlack18px } from "../../constants/fonts/Fonts";
//@ts-ignore
import { RootState } from '../app/store';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {addToFavorites} from "../../store/reducers/favoritesSlice";
// @ts-ignore
import {addFavoritePlace} from "../../firestore";

interface Place {
    geometry: {
        lat: string | null | undefined;
    };
    photos: {
        getUrl: (options: { maxWidth: number; maxHeight: number; }) => any;
    }[];
    place_id: string;
    name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
}

export const PlacesList = () => {
    const dispatch = useDispatch();
    const placesList = useTypedSelector((state) => state.favorites.favorites);
    const userId = useTypedSelector(state => state.user.id);

    const handleAddFavorite = (place : Place) => {
        dispatch(addToFavorites(place));
        addFavoritePlace(userId, place.place_id);

    }

    const handleAddFavoriteCurried = (place: Place) => () => handleAddFavorite(place);

    return (
        <PlacesListContainer width={'auto'} key={placesList.length}>
            {placesList.map((place: Place) => (
                <PlaceCard key={place.geometry.lat}>
                    <PlaceMineature>
                        <img src={place.photos && place.photos[0].getUrl({ maxWidth: 400, maxHeight: 100 })} />
                    </PlaceMineature>
                    <TextBlack18px>
                        {place.name}
                    </TextBlack18px>
                    <button onClick={handleAddFavoriteCurried(place)}>В избранное</button>
                </PlaceCard>
            ))}
        </PlacesListContainer>
    );
}

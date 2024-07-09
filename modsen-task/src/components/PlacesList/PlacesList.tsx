import { PlaceCard, PlaceMineature, PlacesListContainer } from "./PlacesList.styles";
import {H1Black} from "../../constants/fonts/Fonts";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Place} from "./PlacesList.types";
import {IconicButton} from "../Header/Header.styles";
import favoritesIcon from "../../assets/icons/favoritesIcon.svg";
import {FlexRow} from "../../constants/blocks/Blocks";
import {useDispatch} from "react-redux";
import {deletePlaceFromFavorites} from "../../store/actions/favoritesActions";

export const PlacesList = () => {
    const placesList = useTypedSelector((state) => state.favorites.favorites);
    const userId = useTypedSelector((state) => state.user.id);
    const dispatch = useDispatch();

    const handleDeletePlace = (place: Place) => {
        // @ts-ignore
        dispatch(deletePlaceFromFavorites(userId, place.place_id));
    }

    const handleDeletePlaceCurried = (place: Place) => () => handleDeletePlace(place);


    return (
        <PlacesListContainer width={'auto'} key={placesList.length}>
            {placesList.map((place: Place) => (
                <PlaceCard key={place.geometry.lat}>
                    <PlaceMineature>
                        <img src={place.photos && place.photos[0].getUrl({ maxWidth: 400, maxHeight: 200})} />
                    </PlaceMineature>
                    <H1Black>{place.name}</H1Black>
                    <FlexRow>
                        <IconicButton color={'none'} style={{width: '50%'}} onClick={handleDeletePlaceCurried(place)}>
                            <img src={favoritesIcon} />
                            Удалить
                        </IconicButton>
                        <IconicButton color={'#5E7BC7'} style={{width: '50%'}}>Маршрут</IconicButton>
                    </FlexRow>
                </PlaceCard>
            ))}
        </PlacesListContainer>
    );
}

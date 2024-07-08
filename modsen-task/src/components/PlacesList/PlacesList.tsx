import { PlaceCard, PlaceMineature, PlacesListContainer } from "./PlacesList.styles";
import { TextBlack18px } from "../../constants/fonts/Fonts";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Place} from "./PlacesList.types";

export const PlacesList = () => {
    const placesList = useTypedSelector((state) => state.favorites.favorites);

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
                </PlaceCard>
            ))}
        </PlacesListContainer>
    );
}

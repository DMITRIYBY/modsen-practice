import { PlaceCard, PlaceMineature, PlacesListContainer } from "./PlacesList.styles";
import { TextBlack18px } from "../../constants/fonts/Fonts";
//@ts-ignore
import { RootState } from '../app/store';
import { useEffect, useState } from "react";
import {useTypedSelector} from "../../Hooks/useTypedSelector";

interface Place {
    geometry: {
        lat: string | null | undefined;
    };
    photos: {
        getUrl: (options: { maxWidth: number; maxHeight: number; }) => any;
    }[];
    name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
}

export const PlacesList = () => {
    const placesList = useTypedSelector((state) => state.places.places);
    const [places, setPlaces] = useState<Place[]>([]);

    useEffect(() => {
        if (Array.isArray(placesList)) {
            setPlaces(placesList);
        } else {
            console.error('placesList is not an array', placesList);
        }
    }, [placesList]);

    return (
        <PlacesListContainer width={'90%'} key={places.length}>
            {places.map((place: Place) => (
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

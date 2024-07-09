import React from 'react';
import {PlaceInfoContainer} from "./PlaceInfo.styles";
import {FlexRow} from "../../constants/blocks/Blocks";
import {MarkersList} from "../../assets/icons/places";
import {DefaultBlackText, H1Black} from "../../constants/fonts/Fonts";

interface PlaceDetailsProps {
    place: google.maps.places.PlaceResult ;
}

export const PlaceInfo: React.FC<PlaceDetailsProps> = ({ place }) => {
    if (!place) return null;
    const markers = MarkersList;
    const getPlacePhoto = () => {
        if (place.photos && place.photos.length > 0) {
            const photoUrl = place.photos[0].getUrl({ maxWidth: 200, maxHeight: 200 });
            return <img src={photoUrl} alt={place.name || 'Place'} />;
        }
    };

    const { name, formatted_address, rating, user_ratings_total } = place;

    return (
        <PlaceInfoContainer>
            {getPlacePhoto()}
            <FlexRow>
                {
                    place?.types?.map((type) => {
                        if (markers && markers[type] && markers[type][0]) {
                            return <img src={markers[type][0]} alt={type} key={type} style={{width: '30px'}}/>;
                        } else {
                            return null;
                        }
                    })
                }
            </FlexRow>
            <H1Black>{name}</H1Black>
            <DefaultBlackText>{formatted_address}</DefaultBlackText>
            <DefaultBlackText>{rating && `Рейтинг: ${rating}`}</DefaultBlackText>
            <DefaultBlackText>{user_ratings_total && `Отзывов: ${user_ratings_total}`}</DefaultBlackText>
        </PlaceInfoContainer>
    );
};
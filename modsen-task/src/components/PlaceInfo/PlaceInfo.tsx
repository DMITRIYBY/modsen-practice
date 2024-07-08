import React from 'react';

interface PlaceDetailsProps {
    place: Place | null;
}

export const PlaceInfo: React.FC<PlaceDetailsProps> = ({ place }) => {
    if (!place) return null;

    const { name, formatted_address, rating, user_ratings_total } = place;

    const getPlacePhoto = () => {
        if (place.photos && place.photos.length > 0) {
            const photoUrl = place.photos[0].getUrl({ maxWidth: 200, maxHeight: 200 });
            return <img src={photoUrl} alt={place.name || 'Place'} />;
        }
    };

    return (
        <div>
            <h2>{name}</h2>
            <p>{formatted_address}</p>
            <p>{rating && `Rating: ${rating}`}</p>
            <p>{user_ratings_total && `Total Ratings: ${user_ratings_total}`}</p>
            {getPlacePhoto()}
        </div>
    );
};
import React from 'react';

interface PlaceDetailsProps {
    place: Place | null;
}

export const PlaceInfo: React.FC<PlaceDetailsProps> = ({ place }) => {
    if (!place) return null;

    const { name, formatted_address, rating, user_ratings_total, photos } = place;

    return (
        <div>
            <h2>{name}</h2>
            <p>{formatted_address}</p>
            <p>{rating && `Rating: ${rating}`}</p>
            <p>{user_ratings_total && `Total Ratings: ${user_ratings_total}`}</p>
            {photos && photos.length > 0 && (
                <img
                    src={photos[0].getURI({ maxWidth: 200, maxHeight: 200 })}
                    alt={name}
                />
            )}
        </div>
    );
};
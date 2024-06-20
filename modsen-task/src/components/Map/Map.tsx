import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
};

const center = {
    lat: 53.89148473951982,
    lng: 27.56005834796063,
};

const options = {
    disableDefaultUI: true,
    zoomControl: true,
};

interface Place {
    photo: any;
    name: string;
    photos?: google.maps.places.Photo[];
    geometry: {
        location: {
            lat: () => number;
            lng: () => number;
        };
    };
}

export const Map : React.FC = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyASakd9_-V0Sl-hfufvhF_MFhe0SDnITB0', // Убедитесь, что заменили на ваш API ключ
        libraries: ['places'],
    });

    const [places, setPlaces] = useState<Place[]>([]);

    useEffect(() => {
        if (isLoaded) {
            const service = new window.google.maps.places.PlacesService(
                document.createElement('div')
            );

            const request = {
                location: center,
                radius: '1000',
                type: 'museum',
            };

            service.nearbySearch(request, (results: Place[], status: google.maps.places.PlacesServiceStatus) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    setPlaces(results);
                }
            });
        }
    }, [isLoaded]);

    if (loadError) return <div>Ошибка загрузки карты</div>;
    if (!isLoaded) return <div>Загрузка карты...</div>;
    console.log(places);
    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={16}
                center={center}
                options={options}
            >
                {places.map((place, index) => (
                    <Marker
                        icon={{
                            url: place.photos && place.photos[0].getUrl({ maxWidth: 50, maxHeight: 50 }),
                            scaledSize: new window.google.maps.Size(50, 50),
                        }}
                        key={index}
                        position={{
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng(),
                        }}
                    />
                ))}
            </GoogleMap>
            <div>
                <h2>Музеи в радиусе 1 км</h2>
                <ul>
                    {places.map((place, index) => (
                        <li key={index}>{place.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

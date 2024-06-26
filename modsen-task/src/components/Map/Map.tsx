import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { MapContainer } from "../../Pages/Main/Main.styles";
import { WideContainer } from "../../constants/blocks/Blocks.ts";
import { mapStyles } from "./Map.styles.ts";
import { useSelector } from 'react-redux';
// @ts-ignore
import { RootState } from '../app/store';

const mapContainerStyle = {
    width: '100%',
    height: '100vh',
};

const defaultCenter = {
    lat: 53.89148473951982,
    lng: 27.56005834796063,
};

const options = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: mapStyles,
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

export const Map: React.FC = () => {
    const [zoomValue, setZoomValue] = useState<number>(14);
    const [currentPlace, setCurrentPlace] = useState<Place>();
    const [places, setPlaces] = useState<Place[]>([]);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyASakd9_-V0Sl-hfufvhF_MFhe0SDnITB0',
        libraries: ['places'],
    });
    // console.log(useSelector(state => state.filter.buildingType).length, useSelector(state => state.filter.radius))
    useEffect(() => {
        if (isLoaded) {
            const service = new window.google.maps.places.PlacesService(
                document.createElement('div')
            );

            const request = {
                location: defaultCenter,
                radius: 1000,
                type: ""
            };
            // @ts-ignore
            service.nearbySearch(request, (results: Place[], status: google.maps.places.PlacesServiceStatus) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    setPlaces(results);
                } else {
                    console.error('Ошибка при запросе мест:', status);
                }
            });
        }
    }, [isLoaded, useSelector((state: RootState) => state.filter.buildingType), useSelector((state: RootState) => state.filter.radius)]);

    useEffect(() => {

        if (currentPlace) {
            setZoomValue(16);
        }
    }, [currentPlace]);

    if (loadError) return <div>Ошибка загрузки карты</div>;
    if (!isLoaded) return <div>Загрузка карты...</div>;

    // @ts-ignore
    return (
        <WideContainer>
            <MapContainer>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={zoomValue}
                    center={
                        currentPlace
                            ? {
                                lat: currentPlace.geometry.location.lat(),
                                lng: currentPlace.geometry.location.lng(),
                            }
                            : defaultCenter
                    }
                    options={options}
                >
                    {places.map((place, index) => (
                        <Marker
                            key={index}
                            position={{
                                lat: place.geometry.location.lat(),
                                lng: place.geometry.location.lng(),
                            }}
                            icon={{
                                url: place.photos && place.photos.length > 0 ? place.photos[0]?.getURI({ maxWidth: 50, maxHeight: 50 }) as string : '',
                                scaledSize: new window.google.maps.Size(50, 50),
                            }}
                            onClick={() => setCurrentPlace(place)}
                        />
                    ))}
                </GoogleMap>
            </MapContainer>
        </WideContainer>
    );
};

import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { MapContainer } from "../../Pages/Main/Main.styles";
import { Filter } from "../Filter/Filter";
import {WideContainer} from "../../constants/blocks/Blocks.ts";
import {mapStyles} from "./Map.styles.ts";
import useGeolocation from "../../Hooks/Geolocation.ts";
import {PlacesList} from "../PlacesList/PlacesList.tsx";

const mapContainerStyle = {
    width: '100%',
    height: '100lvh',
};


const defaultCenter = {
    lat: 53.89148473951982,
    lng: 27.56005834796063,
};

const options = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: mapStyles
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
    const { latitude, longitude, error } = useGeolocation();
    const [zoomValue, setZoomValue] = useState<number>(14);
    const [radius, setRadius] = useState<number>(1000);
    const [buildingType, setBuildingType] = useState("");
    const [currentPlace, setCurrentPlace] = useState<Place>();

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyASakd9_-V0Sl-hfufvhF_MFhe0SDnITB0',
        libraries: ['places'],
    });

    const [places, setPlaces] = useState<Place[]>([]);

    useEffect(() => {
        if (isLoaded) {
            const service = new window.google.maps.places.PlacesService(
                document.createElement('div')
            );

            const request = {
                location: defaultCenter,
                radius: radius,
                type: buildingType,
            };

            service.nearbySearch(request, (results: Place[], status: google.maps.places.PlacesServiceStatus) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    setPlaces(results);
                }
            });
        }
    }, [isLoaded, buildingType]);

    const ShowCurrentPlace = (place) => {
        setCurrentPlace(place);
        setZoomValue(20);
    }
    const handleFilter = (selectedCategory: string) => {
        setBuildingType(selectedCategory);
    };

    if (loadError) return <div>Ошибка загрузки карты</div>;
    if (!isLoaded) return <div>Загрузка карты...</div>;

    console.log(places);

    return (
        <WideContainer>
            {/*<Filter onFilter={handleFilter} />*/}
            <PlacesList places={places} onSelect={setCurrentPlace} onZoom={setZoomValue} onFilter={handleFilter}/>
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
                {/*<div style={{maxWidth: '45%'}}>*/}
                {/*    <h2>Музеи в радиусе 1 км</h2>*/}
                {/*    <ul>*/}
                {/*        {places.map((place, index) => (*/}
                {/*            <li key={index}>*/}
                {/*                {place.name}*/}
                {/*                <button onClick={() => ShowCurrentPlace(place)}>На карте</button>*/}
                {/*            </li>*/}
                {/*        ))}*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </MapContainer>
        </WideContainer>
    );
}

import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { MapContainer } from "../../Pages/Main/Main.styles";
import { WideContainer } from "../../constants/blocks/Blocks";
import { mapStyles } from "./Map.styles";
import {useDispatch, useSelector} from 'react-redux';
//@ts-ignore
import { RootState } from '../app/store';
import {setPlacesList} from "../../store/reducers/placesSlice";

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

export const Map: React.FC = () => {
    const filters = useSelector((state : RootState) => state.filter);
    const dispatch = useDispatch();

    const [zoomValue, setZoomValue] = useState<number>(14);
    const [currentPlace, setCurrentPlace] = useState<Place>();
    const [places, setPlaces] = useState<Place[]>([]);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAolfS_257dQALVWlt3TGxcUNJYMKszpe4',
        libraries: ['places'],
    });

    useEffect(() => {
        if (isLoaded) {
            const service = new google.maps.places.PlacesService(
                document.createElement('div')
            );

            let request = {
                location: defaultCenter,
                radius: filters.radius,
                type: [filters.buildingType]
            };
            // @ts-ignore
            service.nearbySearch(request, (results: Place[], status: google.maps.places.PlacesServiceStatus) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    setPlaces(results);
                    dispatch(setPlacesList(results));
                } else {
                    console.error('Ошибка при запросе мест:', status);
                }
            });

        }

    }, [isLoaded, filters]);


    useEffect(() => {

        if (currentPlace) {
            setZoomValue(16);
        }
    }, [currentPlace]);

    if (loadError) return <div>Ошибка загрузки карты</div>;
    if (!isLoaded) return <div>Загрузка карты...</div>;

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
                            // icon={{
                            //     url: place.photos && place.photos.length > 0 && typeof place.photos[0].getURI === 'function'
                            //         ? place.photos[0].getURI({ maxWidth: 50, maxHeight: 50 })
                            //         : '',
                            //     scaledSize: new window.google.maps.Size(50, 50),
                            // }}
                            onClick={() => setCurrentPlace(place)}
                        />

                    ))}
                </GoogleMap>
            </MapContainer>
        </WideContainer>
    );
};

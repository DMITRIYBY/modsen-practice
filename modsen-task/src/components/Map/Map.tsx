import React, { useEffect, useState } from 'react';
import {GoogleMap, useLoadScript, Marker, DirectionsRenderer, InfoWindow} from '@react-google-maps/api';
import { MapContainer } from "../../Pages/Main/Main.styles";
import {FlexRow, WideContainer} from "../../constants/blocks/Blocks";
import { mapStyles } from "./Map.styles";
import {useDispatch} from 'react-redux';
import {setPlacesList} from "../../store/reducers/placesSlice";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {MarkersList} from "../../assets/icons/places";
import {IconicButton} from "../Header/Header.styles";
import goIcon from "../../assets/icons/goIcon.png";
import cancelIcon from "../../assets/icons/cancelIcon.svg";
import myLocationIcon from "../../assets/icons/myLocationIcon.svg";
import favoritesIcon from "../../assets/icons/favoritesIcon.svg";
import {PlaceInfo} from "../PlaceInfo/PlaceInfo";
import {PlaceInfoContainer} from "../PlaceInfo/PlaceInfo.styles";
import {toast, Toaster} from "react-hot-toast";
import {addPlaceToFavorites} from "../../store/actions/favoritesActions";

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
    const filters = useTypedSelector((state) => state.filter);
    const dispatch = useDispatch();

    const user = useTypedSelector((state) => state.user);
    const [mapCenter, setMapCenter] = useState(defaultCenter);
    const [zoomValue, setZoomValue] = useState<number>(14);
    const [currentPlace, setCurrentPlace] = useState<any | null>(null);
    const [places, setPlaces] = useState<Place[]>([]);
    const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
    const [origin, setOrigin] = useState<google.maps.LatLngLiteral | null>(null);

    const markers = MarkersList;
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    });

    const handleGetRoute = (place: Place) => {
        if (place.geometry?.location) {
            const destination = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            };

            setOrigin(mapCenter);

            if(directions == null) {


                const request: google.maps.DirectionsRequest = {
                    origin: origin!,
                    destination: destination,
                    travelMode: google.maps.TravelMode.DRIVING
                };

                const directionsService = new google.maps.DirectionsService();
                directionsService.route(request, (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        setDirections(result);
                    } else {
                        console.error('Error fetching directions:', status);
                    }
                });
            } else {
                toast.error(`You already have a route!`)
            }
        }
    };
    const handleGetRouteCurried = (place: Place)  => () => handleGetRoute(place);
    const handleDeleteRoute = () => setDirections(null);

    const handleAddFavorite = (place: Place) => {
        // @ts-ignore
        dispatch(addPlaceToFavorites(user.id, place));
    }

    const handleAddFavoriteCurried = (place: Place) => () => handleAddFavorite(place)

    useEffect(() => {

        try{
            navigator.geolocation.getCurrentPosition(function (position) {
                setMapCenter({lat: position.coords.latitude, lng: position.coords.longitude});
            });
        } catch (e){
            console.log(e);
        }

        if (isLoaded) {
            const service = new google.maps.places.PlacesService(
                document.createElement('div')
            );

            const queryParts = [];
            if (filters.name) {
                queryParts.push(filters.name);
            }
            if (filters.buildingType) {
                queryParts.push(filters.buildingType);
            }

            const query = queryParts.join(' ');

            const request = {
                query: query,
                location: mapCenter,
                radius: filters.radius
            };

            // @ts-ignore
            service.textSearch(request, (results: Place[], status: google.maps.places.PlacesServiceStatus) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    setPlaces(results);
                    dispatch(setPlacesList(results));
                } else {
                    console.error('Ошибка при запросе мест:', status);
                }
            });

        }

        console.log(directions)

    }, [isLoaded, filters, directions]);


    useEffect(() => {

        if (currentPlace) {
            setZoomValue(16);
        }
    }, [currentPlace]);

    if (loadError) return <div>Ошибка загрузки карты</div>;
    if (!isLoaded) return <div>Загрузка карты...</div>;

    return (
        <WideContainer>
            {/*<DirectionInfo direction={directions}/>*/}
            <MapContainer>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={zoomValue}
                    center={
                        currentPlace
                            ? {
                                lat: currentPlace.geometry.location.lat(),
                                lng: currentPlace.geometry.location.lng(),
                            }
                            : mapCenter
                    }
                    options={options}
                >
                    <Marker
                        position={{
                            lat: mapCenter.lat,
                            lng: mapCenter.lng
                        }}
                        icon={{
                            url: myLocationIcon,
                            scaledSize: new window.google.maps.Size(20, 20)
                        }}
                    />
                    {directions && <DirectionsRenderer directions={directions} options={{ suppressMarkers: true }}/>}
                    {places.map((place, index) => {
                        const placeType = place.types?.[0] || '';
                        const markerData = markers[placeType];
                        const url = markerData ? markerData[0] : '';
                        return (
                            <Marker
                                key={index}
                                position={{
                                    lat: place.geometry.location.lat(),
                                    lng: place.geometry.location.lng(),
                                }}
                                icon={{
                                    url: url,
                                    scaledSize: new window.google.maps.Size(30, 30)
                                }}
                                onClick={() => setCurrentPlace(place)}
                            />
                        );
                    })}
                    {currentPlace && (
                        <InfoWindow
                            position={{ lat: currentPlace.geometry?.location?.lat() || 0, lng: currentPlace.geometry?.location?.lng() || 0 }}
                            onCloseClick={() => setCurrentPlace(null)}
                        >
                            <PlaceInfoContainer>
                                <PlaceInfo place={currentPlace}/>
                                <FlexRow style={{justifyContent: "space-between", width: "100%"}}>
                                    { directions == null ? ( <IconicButton
                                        color={'lightgreen'}
                                        onClick={handleGetRouteCurried(currentPlace)}
                                        style={{ width: '100%' }}
                                    >
                                        Построить путь
                                        <img src={goIcon} alt="" style={{width: '20px', height: '20px'}}/>
                                    </IconicButton>
                                    ) : (
                                        <IconicButton
                                            color={'red'}
                                            onClick={handleDeleteRoute}
                                            style={{ width: '100%' }}
                                        >
                                            Отмена
                                            <img src={cancelIcon} alt="" style={{width: '20px', height: '20px'}}/>
                                        </IconicButton>
                                    )}
                                        <IconicButton color={'none'} onClick={handleAddFavoriteCurried(currentPlace)}>
                                            <img src={favoritesIcon} />
                                        </IconicButton>
                                </FlexRow>
                            </PlaceInfoContainer>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </MapContainer>
        </WideContainer>
    );
};

import {PlaceCard, PlaceMineature, PlacesListContainer} from "./PlacesList.styles";
import {TextBlack18px} from "../../constants/fonts/Fonts";

interface Place {
    geometry: {
        lat: string | null | undefined;
    };
    photos: {
        getUrl: (options: { maxWidth: number; maxHeight: number; }) => any;
    }[];
    name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
}


interface PlacesListProps {
    places: any,
    // onSelect: any,
    // onZoom: any,
    // onFilter: any
};

export const PlacesList: React.FC<PlacesListProps>  = ({places}) => {

    // const ShowCurrentPlace = (place: Place) => {
    //     // onSelect(place);
    //     // onZoom(20);
    // }

    return(
        <PlacesListContainer isShow={true} width={'30%'} key={places.length}>
                    {places.map((place: Place) => (
                        <PlaceCard key={place.geometry.lat}>
                            <PlaceMineature>
                                <img src={place.photos && place.photos[0].getUrl({ maxWidth: 400, maxHeight: 100 })}/>
                            </PlaceMineature>
                            <TextBlack18px>
                                {place.name}
                            </TextBlack18px>
                            {/*<button onClick={() => ShowCurrentPlace(place)}>На карте</button>*/}
                        </PlaceCard>
                    ))}
        </PlacesListContainer>
    );
}
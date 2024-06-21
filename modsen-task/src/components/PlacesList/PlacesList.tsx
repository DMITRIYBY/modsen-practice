import {PlaceCard, PlaceMineature, PlacesListContainer} from "./PlacesList.styles.ts";
import {TextBlack18px} from "../../constants/fonts/Fonts.ts";
import {Filter} from "../Filter/Filter.tsx";

interface PlacesListProps {
    places: any,
    onSelect: any,
    onZoom: any,
    onFilter: any
};

export const PlacesList: React.FC<PlacesListProps>  = ({places, onSelect, onZoom, onFilter}) => {

    const ShowCurrentPlace = (place: any) => {
        onSelect(place);
        onZoom(20);
    }

    return(
        <PlacesListContainer isShow={true} width={'30%'}>

                    <Filter onFilter={onFilter}/>
                    {places.map((place, index) => (
                        <PlaceCard>
                            <PlaceMineature>
                                <img src={place.photos && place.photos[0].getUrl({ maxWidth: 400, maxHeight: 100 })}/>
                            </PlaceMineature>
                            <TextBlack18px>
                                {place.name}
                            </TextBlack18px>
                            <button onClick={() => ShowCurrentPlace(place)}>На карте</button>
                        </PlaceCard>
                    ))}
        </PlacesListContainer>
    );
}
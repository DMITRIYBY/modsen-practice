import {FavoritesContainer} from "./Favorites.styles";
import {PlacesList} from "../../components/PlacesList/PlacesList";

export const Favorites = () => {
    return(
        <FavoritesContainer>
            <PlacesList />
        </FavoritesContainer>
    );
}
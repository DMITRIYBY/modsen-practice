import {DirectionContainer} from "./DirectionInfo.styles";
import {DefaultBlackText} from "../../constants/fonts/Fonts";

interface Direction {
    direction: google.maps.DirectionsResult | null
}
export const DirectionInfo = (direction: Direction) => {

    if(direction === null) return null;

    return(
        <DirectionContainer>
            <DefaultBlackText>
                Privet
            </DefaultBlackText>
        </DirectionContainer>
    );
}
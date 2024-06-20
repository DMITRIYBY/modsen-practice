import {HeaderContainer} from "./Header.styles.ts";
import {H1Black} from "../../constants/fonts/Fonts.ts";
import {Link} from "react-router-dom";

export const Header = () => {

    return(
        <HeaderContainer>
            <Link to={'/'}>
                <H1Black>Главная</H1Black>
            </Link>
        </HeaderContainer>
    );
}
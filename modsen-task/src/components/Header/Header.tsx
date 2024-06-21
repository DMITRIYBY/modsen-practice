import {GreyStroke, HeaderContainer, IconicButton} from "./Header.styles.ts";
// import {H1Black} from "../../constants/fonts/Fonts.ts";
// import {Link} from "react-router-dom";
import mappieLogo from "../../assets/icons/mappieLogo.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import favoritesIcon from "../../assets/icons/favoritesIcon.svg";

export const Header = () => {

    return(
        <HeaderContainer>
            <img src={mappieLogo}/>
            <GreyStroke/>
            <IconicButton color={'green'}>
                <img src={searchIcon}/>
            </IconicButton>
            <IconicButton color={'none'}>
                <img src={favoritesIcon}/>
            </IconicButton>
            {/*<Link to={'/'}>*/}
            {/*    <H1Black>Главная</H1Black>*/}
            {/*</Link>*/}
        </HeaderContainer>
    );
}
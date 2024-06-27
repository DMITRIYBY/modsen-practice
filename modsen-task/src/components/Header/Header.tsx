import {GreyStroke, HeaderContainer, IconicButton} from "./Header.styles";
// import {H1Black} from "../../constants/fonts/Fonts.ts";
import {NavLink} from "react-router-dom";
import mappieLogo from "../../assets/icons/mappieLogo.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import favoritesIcon from "../../assets/icons/favoritesIcon.svg";

export const Header = () => {

    return(
        <HeaderContainer>
            <img src={mappieLogo}/>
            <GreyStroke/>
            <NavLink to='/search'>
                <IconicButton color={'#5E7BC7'}>
                    <img src={searchIcon}/>
                </IconicButton>
            </NavLink>
            <NavLink to='/favorites'>
                <IconicButton color={'none'}>
                    <img src={favoritesIcon} />
                </IconicButton>
            </NavLink>
            {/*<Link to={'/'}>*/}
            {/*    <H1Black>Главная</H1Black>*/}
            {/*</Link>*/}
        </HeaderContainer>
    );
}
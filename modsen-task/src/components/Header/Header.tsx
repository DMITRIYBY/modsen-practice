import {GreyStroke, HeaderContainer, IconicButton} from "./Header.styles";
import {NavLink} from "react-router-dom";
import mappieLogo from "../../assets/icons/mappieLogo.svg";
import searchIcon from "../../assets/icons/searchIcon.svg";
import favoritesIcon from "../../assets/icons/favoritesIcon.svg";
import userIcon from "../../assets/icons/userIcon.svg";
import logoutIcon from "../../assets/icons/logoutIcon.svg";
import {useAuth} from "../../hooks/useAuth";
import {InvisibleButton} from "../../constants/buttons/Buttons";
import {useDispatch} from "react-redux";
import {clearUser} from "../../store/reducers/userSlice";
import {FlexColumn} from "../../constants/blocks/Blocks";

export const Header = () => {
    const dispatch = useDispatch();

    const {isAuth} = useAuth();

    const handleLogout = () => {
        dispatch(clearUser());
    }


    return(
        <HeaderContainer>
            <FlexColumn>
                <img src={mappieLogo}/>
                <GreyStroke/>
                <NavLink to='/'>
                    <IconicButton color={'#5E7BC7'}>
                        <img src={searchIcon}/>
                    </IconicButton>
                </NavLink>
                <NavLink to='/favorites'>
                    <IconicButton color={'none'}>
                        <img src={favoritesIcon} />
                    </IconicButton>
                </NavLink>
            </FlexColumn>
            <InvisibleButton onClick={handleLogout}>
                {isAuth ? (<img src={logoutIcon} />) : (<img src={userIcon} />)}
            </InvisibleButton>
        </HeaderContainer>
    );
}
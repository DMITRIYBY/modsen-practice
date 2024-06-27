import { Fragment } from "react/jsx-runtime";
import {Map} from "../../components/Map/Map";
import {HeaderFix} from "../../components/Header/Header.styles";

export const Main = () => {
    return(
        <Fragment>
            <HeaderFix />
            <Map />
        </Fragment>
    );
}
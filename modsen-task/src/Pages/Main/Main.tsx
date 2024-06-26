import { Fragment } from "react/jsx-runtime";
import {Map} from "../../components/Map/Map.tsx";
import {HeaderFix} from "../../components/Header/Header.styles.ts";

export const Main = () => {
    return(
        <Fragment>
            <HeaderFix />
            <Map />
        </Fragment>
    );
}
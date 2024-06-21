import { Fragment } from "react/jsx-runtime";
import {Header} from "../../components/Header/Header";
import {Map} from "../../components/Map/Map.tsx";
import {HeaderFix} from "../../components/Header/Header.styles.ts";

export const Main = () => {
    return(
        <Fragment>
            <Header />
            <HeaderFix />
            <Map />
        </Fragment>
    );
}
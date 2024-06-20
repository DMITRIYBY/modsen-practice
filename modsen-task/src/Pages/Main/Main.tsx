import { Fragment } from "react/jsx-runtime";
import {Header} from "../../components/Header/Header";
import {Map} from "../../components/Map/Map.tsx";
import {HeaderFix} from "../../components/Header/Header.styles.ts";
import {Filter} from "../../components/Filter/Filter.tsx";

export const Main = () => {
    return(
        <Fragment>
            <Header />
            <HeaderFix />
            <Map />
        </Fragment>
    );
}
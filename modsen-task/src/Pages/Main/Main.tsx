import { Fragment } from "react/jsx-runtime";
import {Filter} from "../../components/Filter/Filter";
import {PlacesList} from "../../components/PlacesList/PlacesList";

export const Main = () => {
    return(
        <Fragment>
            <Filter />
            <PlacesList />
        </Fragment>
    );
}
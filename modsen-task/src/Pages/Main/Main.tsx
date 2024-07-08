import { Fragment } from "react/jsx-runtime";
import {Filter} from "../../components/Filter/Filter";
import {useAuth} from "../../hooks/useAuth"
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const Main = () => {
    const navigate = useNavigate();
    const {isAuth} = useAuth();

    useEffect(() => {
        if(!isAuth){
            navigate("/login");
        }
    }, [isAuth])

    return (
        <Fragment>
            <Filter />
        </Fragment>
    );

}
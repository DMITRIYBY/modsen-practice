import {useSelector} from "react-redux";
import {RootState} from "@reduxjs/toolkit/query";


export const useAuth = () => {
    // @ts-ignore
    const {email, token, id} = useSelector((state : RootState<string, string, string>) => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}

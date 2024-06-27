import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/userSlice';
import {BorderedInput} from "../../constants/blocks/Blocks";
import {BorderedBlackButton} from "../../constants/buttons/Buttons";
import {TextBlack18px} from "../../constants/fonts/Fonts";
import {LoginContainer} from "./Login.styles";

export const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const user = useSelector((state : any) => state.user);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        dispatch(setUser({ login, password }));
        console.log(user);
    };

    return (
        <form onSubmit={handleSubmit}>
            <LoginContainer>
                <BorderedInput
                    type="text"
                    placeholder="Login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <BorderedInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                />
            <BorderedBlackButton type="submit">
                <TextBlack18px>Login</TextBlack18px>
            </BorderedBlackButton>
        </LoginContainer>
        </form>
    );
}

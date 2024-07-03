import { useState } from "react";
import {BorderedInput, PageContainer} from "../../constants/blocks/Blocks";
import {BorderedBlackButton} from "../../constants/buttons/Buttons";
import {H1Black, TextBlack18px} from "../../constants/fonts/Fonts";
import {useDispatch} from "react-redux";
import {LoginContainer} from "./Login.styles";
import {Link, useNavigate} from "react-router-dom";
import {signInUser} from "../../firebase";
import {setUser} from "../../store/reducers/userSlice";


export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        signInUser(login, password)
            .then((userCredential) => {
                const user = userCredential.user;
                //@ts-ignore
                dispatch(setUser({ email: user.email ? user.email : '' , token: user.accessToken, id: user.uid }));
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    };

    return (
                <PageContainer>
                    <LoginContainer>
                        <H1Black>Welcome to Modsen Maps</H1Black>
                        <form onSubmit={handleSubmitLogin}>
                            <LoginContainer>
                                <BorderedInput
                                    type="text"
                                    placeholder="Login"
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                />
                                <BorderedInput
                                    type="text"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                            <BorderedBlackButton type="submit">
                                <TextBlack18px>Login</TextBlack18px>
                            </BorderedBlackButton>
                            <Link to={'/register'}>
                                <TextBlack18px>Register...</TextBlack18px>
                            </Link>
                        </LoginContainer>
                        </form>
                    </LoginContainer>
            </PageContainer>
    );
}

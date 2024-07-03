import { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { setUser } from '../../store/reducers/userSlice';
import {BorderedInput, PageContainer} from "../../constants/blocks/Blocks";
import {BorderedBlackButton} from "../../constants/buttons/Buttons";
import {TextBlack18px} from "../../constants/fonts/Fonts";
import {LoginContainer} from "../Login/Login.styles";
import {Link, useNavigate} from "react-router-dom";
import {createUser} from "../../firebase";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/reducers/userSlice";


export const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [copyPassword, setCopyPassword] = useState('');
    // const user = useSelector((state : any) => state.user);

    const handleSubmitRegister = async () => {
        if (password === copyPassword) {
            try {
                const userCredential = await createUser(login, password);

                const user = userCredential.user;
                dispatch(setUser({ email: user.email ? user.email : '' , token: user.accessToken, id: user.uid }));
                navigate("/")
            } catch (error) {
                console.error("Error creating user:", error);
            }
        } else {
            console.error("Passwords do not match.");
        }
    };

    return (
        <PageContainer>
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
                <BorderedInput
                    type="text"
                    placeholder="copyPassword"
                    value={copyPassword}
                    onChange={(e) => setCopyPassword(e.target.value)}

                />
                <BorderedBlackButton onClick={handleSubmitRegister}>
                    <TextBlack18px>Register</TextBlack18px>
                </BorderedBlackButton>
                <Link to={'/login'}>
                    <TextBlack18px>Login...</TextBlack18px>
                </Link>
            </LoginContainer>
        </PageContainer>
    );
}

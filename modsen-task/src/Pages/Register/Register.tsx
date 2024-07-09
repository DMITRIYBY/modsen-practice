import { useState } from "react";
import {BorderedInput, CenterPageContainer, FlexColumn, FlexRow} from "../../constants/blocks/Blocks";
import {BorderedBlackButton} from "../../constants/buttons/Buttons";
import {H1Black, TextBlack18px} from "../../constants/fonts/Fonts";
import {LoginContainer} from "../Login/Login.styles";
import {Link, useNavigate} from "react-router-dom";
import {createUser} from "../../firebase";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/reducers/userSlice";
import mappieLogo from "../../assets/icons/mappieLogo.svg";
import {toast, Toaster} from "react-hot-toast";


export const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [copyPassword, setCopyPassword] = useState('');

    const handleSubmitRegister = async () => {
        if (password === copyPassword) {
            try {
                const userCredential = await createUser(login, password);

                const user = userCredential.user;
                //@ts-ignore
                dispatch(setUser({ email: user.email ? user.email : '' , token: user.accessToken, id: user.uid }));
                navigate("/")
            } catch (error) {
                // @ts-ignore
                const errorMessage = error.message;
                toast.error(`Error creating user: ${errorMessage}`)
            }
        } else {
            toast.error(`Error creating user: password don't match!`)
        }
    };

    return (
        <CenterPageContainer>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <LoginContainer>
                <FlexRow>
                    <H1Black>Welcome to Modsen Maps</H1Black>
                    <img src={mappieLogo} />
                </FlexRow>
                <FlexColumn>
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
                    <BorderedBlackButton onClick={handleSubmitRegister} style={{width: '100%'}}>
                        <TextBlack18px>Register</TextBlack18px>
                    </BorderedBlackButton>
                    <Link to={'/login'}>
                        <TextBlack18px>Login...</TextBlack18px>
                    </Link>
                </FlexColumn>
            </LoginContainer>
        </CenterPageContainer>
    );
}

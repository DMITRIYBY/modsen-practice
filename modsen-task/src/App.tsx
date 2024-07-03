import {Header} from "./components/Header/Header";
import {InteractiveContainer} from "./components/InteractiveContainer/InteractiveContainer.styles";
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {Routes, Route, useNavigate} from "react-router-dom";
import {Map} from "./components/Map/Map";
import {Login} from "./Pages/Login/Login";
import {HeaderFix} from "./components/Header/Header.styles";
import "./App.css";
import {Main} from "./Pages/Main/Main";
import {Register} from "./Pages/Register/Register";
import {Fragment, useEffect} from "react";
import {useAuth} from "./Hooks/useAuth";

function App() {

    const navigate = useNavigate();

    // @ts-ignore
    const {isAuth} = useAuth();

    useEffect(() => {
        if(!isAuth){
            navigate("/login");
        }
    }, [isAuth])

    return isAuth ? (
        <Fragment>
            <Header />
            <InteractiveContainer isShow={true}>
                <HeaderFix/>
                        <Routes>
                            <Route path="/" element={<Main />} />
                        </Routes>
            </InteractiveContainer>
            <Map />
        </Fragment>
  ) : (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
}

export default App

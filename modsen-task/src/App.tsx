import { Provider } from 'react-redux';
import store from './store/store';
import {Header} from "./components/Header/Header";
import {InteractiveContainer} from "./components/InteractiveContainer/InteractiveContainer.styles";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {Routes, Route, useLocation} from "react-router-dom";
import {Map} from "./components/Map/Map";
import {Login} from "./Pages/Login/Login";
import {Favorites} from "./Pages/Favorites/Favorites";
import {HeaderFix} from "./components/Header/Header.styles";
import "./App.css";
import {Filter} from "./components/Filter/Filter";

// import {Login} from "./Pages/Login/Login.tsx";


function App() {
    const location = useLocation();

    return (
        <Provider store={store}>
            <Header />
            {/*<Login />*/}
            <InteractiveContainer>
                <HeaderFix/>
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        classNames="swipe"
                        timeout={300} // время анимации в миллисекундах
                    >
                        <Routes>
                            <Route path="/" element={<div></div>} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/search" element={<Filter />} />
                            <Route path="/favorites" element={<Favorites />} />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
            </InteractiveContainer>
            <Map />
        </Provider>
  )
}

export default App

import { Provider } from 'react-redux';
import store from './store/store.ts';
import {Header} from "./components/Header/Header.tsx";
import {InteractiveContainer} from "./components/InteractiveContainer/InteractiveContainer.styles.ts";
// @ts-ignore
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {Routes, Route, useLocation} from "react-router-dom";
import {Map} from "./components/Map/Map.tsx";
import {Login} from "./Pages/Login/Login.tsx";
import {Favorites} from "./Pages/Favorites/Favorites.tsx";
import {HeaderFix} from "./components/Header/Header.styles.ts";
import "./App.css";
import {Filter} from "./components/Filter/Filter.tsx";

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

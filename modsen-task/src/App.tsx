import {Header} from "./components/Header/Header";
import {InteractiveContainer} from "./components/InteractiveContainer/InteractiveContainer.styles";
import {Routes, Route, useNavigate} from "react-router-dom";
import {Map} from "./components/Map/Map";
import {Login} from "./Pages/Login/Login";
import "./App.css";
import {Main} from "./Pages/Main/Main";
import {Register} from "./Pages/Register/Register";
import {useEffect} from "react";
import {useAuth} from "./hooks/useAuth";
import {Favorites} from "./Pages/Favorites/Favorites";
import {PageContainer} from "./constants/blocks/Blocks";
import {AppPage} from "./App.styles";

function App() {

    const navigate = useNavigate();

    // @ts-ignore
    const {isAuth} = useAuth();
    // const [isShow, setShow] = useState(true)

    useEffect(() => {
        if(!isAuth){
            navigate("/login");
        }
    }, [isAuth])

    // const handleShowMenu = () => {
    //     if(isShow){
    //         setShow(false);
    //     } else {
    //         setShow(true);
    //     }
    // }


    return isAuth ? (
            <AppPage>
                <Header />
                <InteractiveContainer isShow={true}>
                            <Routes>
                                <Route path="/" element={<Main />} />
                                <Route path="/favorites" element={<Favorites />} />
                            </Routes>
                </InteractiveContainer>
                {/*<ShowContainer onClick={handleShowMenu}>0</ShowContainer>*/}
                <Map />
            </AppPage>
  ) : (
      <PageContainer>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </PageContainer>
    );
}

export default App

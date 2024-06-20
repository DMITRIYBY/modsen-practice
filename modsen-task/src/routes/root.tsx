import {Routes, Route} from 'react-router-dom';
import {Main} from "../Pages/Main/Main.tsx";
export const RootRouter: any = ()  => {
    return (
        <Routes>
            <Route path="/check" element={<Main />}/>
        </Routes>
    );
}
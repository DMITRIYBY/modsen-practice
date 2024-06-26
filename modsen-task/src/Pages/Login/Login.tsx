import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/userSlice.ts';

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
            <div>
                <label>Login:</label>
                <input
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

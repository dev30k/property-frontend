import { Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/auth-context';

const PrivateRoutes = ({ children, ...rest }) => {

    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext.isLoggedIn;
    console.log(isLoggedIn);

    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes;

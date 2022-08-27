/*  
    custom hook that will handle the authenticated 
    user’s state using the Context API and useContext
    hook.
 */

import React from "react";
import AuthContext from './auth-context'

export const AuthContextProvider = (props) => {

    const initialToken = localStorage.getItem('token');

    const [token, setToken] = React.useState(initialToken);
    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return <AuthContext.Provider
        value={contextValue}>{props.children}
    </AuthContext.Provider>;
}
export default AuthContextProvider;

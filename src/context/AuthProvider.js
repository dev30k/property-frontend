/*  
    custom hook that will handle the authenticated 
    user’s state using the Context API and useContext
    hook.
 */

import React from "react";
const AuthContext = React.createContext(null);

function AuthProvider({ children }) {


    const [user, setUser] = React.useState(null);

    const login = (newUser, callback) => {
        setUser(newUser);
        callback();
    };

    const logout = (callback) => {
        setUser(null);
        callback();
    };

    const value = { user, login, logout };

    return <AuthContext.Provider
        value={value}>{children}
    </AuthContext.Provider>;
}
export default AuthProvider;
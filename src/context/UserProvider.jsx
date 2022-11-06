import React, { createContext, useContext, useState } from 'react';

export const userContext = createContext();

const UserProvider = ({ children }) => {
    // Login START
    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    //Login END

    //Register START
    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);
    //Register END
    const values = {
        showLogin,
        setShowLogin,
        handleCloseLogin,
        handleShowLogin,
        showRegister,
        setShowRegister,
        handleCloseRegister,
        handleShowRegister,
    };

    return (
        <userContext.Provider value={values}>{children}</userContext.Provider>
    );
};

// Consuming Custom Hook
export const useUserContext = () => {
    return useContext(userContext);
};
export default UserProvider;

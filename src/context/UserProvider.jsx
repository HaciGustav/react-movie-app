import React, { createContext, useContext, useEffect, useState } from 'react';
import { userObserver } from '../auth/firebase';

export const userContext = createContext();

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        userObserver(setCurrentUser);
    }, []);

    return (
        <userContext.Provider value={{ currentUser }}>
            {children}
        </userContext.Provider>
    );
};

// Consuming Custom Hook
export const useUserContext = () => {
    return useContext(userContext);
};
export default UserProvider;

import React, { createContext, useContext, useState } from 'react';

export const userContext = createContext();

const UserProvider = ({ children }) => {
    const values = {};

    return (
        <userContext.Provider value={values}>{children}</userContext.Provider>
    );
};

// Consuming Custom Hook
export const useUserContext = () => {
    return useContext(userContext);
};
export default UserProvider;

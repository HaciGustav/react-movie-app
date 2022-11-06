import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth';
import React, { createContext, useContext, useState } from 'react';
import firebase, { auth } from '../auth/firebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            alert(error.message);
        }
        setRegisterEmail('');
        setRegisterPassword('');
    };
    const handleLogin = async () => {};
    const handleLogout = async () => {};

    const values = {
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
        registerEmail,
        setRegisterEmail,
        registerPassword,
        setRegisterPassword,
        handleRegister,
        user,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export default AuthProvider;

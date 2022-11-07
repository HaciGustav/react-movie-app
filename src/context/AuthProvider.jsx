import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import React, { createContext, useContext, useState } from 'react';
import firebase, { auth } from '../auth/firebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const [user, setUser] = useState();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const benutzer = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );

            setUser(benutzer);
        } catch (error) {
            alert(error.message);
        }
        setRegisterEmail('');
        setRegisterPassword('');
    };
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const benutzer = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );

            setUser(benutzer);
        } catch (error) {
            alert(error.message);
        }
        setLoginEmail('');
        setLoginPassword('');
    };
    const handleLogout = async () => {
        await signOut(auth);
        setUser(null);
    };
    console.log(user);
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
        handleLogout,
        handleLogin,
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

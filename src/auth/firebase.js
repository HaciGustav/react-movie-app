import { initializeApp } from 'firebase/app';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAuth,
    onAuthStateChanged,
} from 'firebase/auth';
import { useState } from 'react';

//const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
    apiKey: 'AIzaSyB8869WXFTP330p12KKPJlvl1f7bspRZRE',
    authDomain: 'hg-movie-app.firebaseapp.com',
    projectId: 'hg-movie-app',
    storageBucket: 'hg-movie-app.appspot.com',
    messagingSenderId: '363634719713',
    appId: '1:363634719713:web:bd2f3891bcdae362e730a0',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const handleRegister = async (
    e,
    registerEmail,
    registerPassword,
    setRegisterEmail,
    setRegisterPassword,
    setUser
) => {
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
export const handleLogin = async (
    e,
    loginEmail,
    loginPassword,
    setLoginEmail,
    setLoginPassword,
    setUser
) => {
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
export const handleLogout = async (setUser) => {
    await signOut(auth);
    setUser(null);
};

export const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
};

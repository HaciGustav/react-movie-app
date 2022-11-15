import { initializeApp } from 'firebase/app';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAuth,
    onAuthStateChanged,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { toastFailedNotify, toastSuccessNotify } from '../helpers/ToastNotify';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const handleRegister = async (
    e,
    registerEmail,
    registerPassword,
    setRegisterEmail,
    setRegisterPassword,
    setUser,
    firstName,
    lastName
) => {
    e.preventDefault();

    const displayName = `${firstName} ${lastName}`;
    try {
        const benutzer = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
        );

        await updateProfile(auth.currentUser, {
            displayName: displayName,
        });

        setUser(benutzer);
        toastSuccessNotify('Signed Up Successfully ');
    } catch (error) {
        toastFailedNotify(error.message);
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
        toastSuccessNotify('Signed In Successfully ');
        setUser(benutzer);
    } catch (error) {
        toastFailedNotify(error.message);
    }
    setLoginEmail('');
    setLoginPassword('');
};
export const handleLogout = async (setUser) => {
    await signOut(auth);
    setUser(null);
    toastSuccessNotify("Signed Out! We'll miss you!");
};

export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const { displayName, email, photoURL } = user;
            setCurrentUser({ email, displayName, photoURL });

            // const uid = user.uid;
        } else {
            // ...
        }
    });
};
//! Sign in with Google
export const signUpWithGoogle = (setUser) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user);
            setUser(result.user);
            toastSuccessNotify('Signed Up Successfully ');
        })
        .catch((error) => {
            console.log(error);
            toastFailedNotify('Something went wrong! Try again!');
        });
};

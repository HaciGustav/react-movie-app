import { useEffect } from 'react';
import './App.css';
import { userObserver } from './auth/firebase';
import UserProvider from './context/UserProvider';
import AppRouter from './router/AppRouter';
import GlobalStyle from './style/GlobalStyle';

function App() {
    return (
        <UserProvider>
            <AppRouter />
            <GlobalStyle />
        </UserProvider>
    );
}

export default App;

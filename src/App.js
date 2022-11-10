import './App.css';
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

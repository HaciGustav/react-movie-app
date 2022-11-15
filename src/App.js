import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from './context/UserProvider';
import AppRouter from './router/AppRouter';
import GlobalStyle from './style/GlobalStyle';

function App() {
    return (
        <>
            <UserProvider>
                <AppRouter />
                <GlobalStyle />
                <ToastContainer />
            </UserProvider>
        </>
    );
}

export default App;

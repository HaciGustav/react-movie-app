import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import AuthProvider from './context/AuthProvider';
import UserProvider from './context/UserProvider';
import Home from './pages/home/Home';
import GlobalStyle from './style/GlobalStyle';

function App() {
    return (
        <AuthProvider>
            <UserProvider>
                <Navbar />
                <Home />

                <Footer />
                <GlobalStyle />
            </UserProvider>
        </AuthProvider>
    );
}

export default App;

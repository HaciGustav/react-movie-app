import './App.css';
import Footer from './components/footer/Footer';
import MovieCard from './components/movie-card/MovieCard';
import Navbar from './components/navbar/Navbar';
import Main from './pages/main/Main';
import GlobalStyle from './style/GlobalStyle';

function App() {
    return (
        <>
            <Navbar />
            <Main />

            <Footer />
            <GlobalStyle />
        </>
    );
}

export default App;

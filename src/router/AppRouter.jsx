import axios from 'axios';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import { toastWarnNotify } from '../helpers/ToastNotify';
import Main from '../pages/home/Home';
import LoginPage from '../pages/loginpage/LoginPage';
import MovieDetail from '../pages/movieDetails/MovieDetail';
import RegisterPage from '../pages/registerPage/RegisterPage';
const AppRouter = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}`;
    const getSearchData = () => {
        axios(searchUrl)
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err.message));
    };
    const handleSearch = (e, user, handleShowLogin) => {
        e.preventDefault();
        if (user) {
            getSearchData();
        } else {
            handleShowLogin();
            toastWarnNotify('Please Log In');
        }
    };

    return (
        <BrowserRouter>
            <Navbar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleSearch={handleSearch}
                setMovies={setMovies}
            />
            <Routes>
                <Route
                    path="/"
                    element={<Main movies={movies} setMovies={setMovies} />}
                />
                <Route path="/:id" element={<MovieDetail />} />
                {/* <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRouter;

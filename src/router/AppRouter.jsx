import axios from 'axios';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import Main from '../pages/home/Home';
import MovieDetail from '../pages/movieDetails/MovieDetail';
const AppRouter = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const apiKey = '9b6bf591aeebad9760d36eaff7737990';

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
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRouter;

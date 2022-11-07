import React, { useEffect, useState } from 'react';
import LoginPage from '../loginpage/LoginPage';
import SlidingCarousel from '../../components/sliding-carousel/SlidingCarousel';
import TopMoviesCarousel from '../../components/top-movies-carousel/TopMoviesCarousel';
import { Container } from './Home.style';
import RegisterPage from '../registerPage/RegisterPage';
import MovieCard from '../../components/movie-card/MovieCard';
import axios from 'axios';

const Main = () => {
    const [data, setData] = useState(Array(20));

    const discoverMoviesFetch = async () => {
        const apiKey = '9b6bf591aeebad9760d36eaff7737990';
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
        try {
            const res = await axios(url);
            setData(res.data.results);
        } catch (error) {
            console.log(error.status);
            console.log(error.message);
        }
    };
    useEffect(() => {
        discoverMoviesFetch();
    }, []);

    console.log(data);
    return (
        <Container>
            {/* <MovieCard /> */}
            <LoginPage />
            <RegisterPage />
            <TopMoviesCarousel data={data} />
            <SlidingCarousel data={data} />
        </Container>
    );
};

export default Main;

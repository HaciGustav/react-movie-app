import React from 'react';
import MovieCard from '../../components/movie-card/MovieCard';
import SlidingCarousel from '../../components/sliding-carousel/SlidingCarousel';
import TopMoviesCarousel from '../../components/top-movies-carousel/TopMoviesCarousel';
import { Container } from './Main.style';

const Main = () => {
    return (
        <Container>
            <TopMoviesCarousel />
            <MovieCard />
            <SlidingCarousel />
            <SlidingCarousel />
        </Container>
    );
};

export default Main;

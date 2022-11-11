import React, { useEffect, useState } from 'react';

import SlidingCarousel from '../../components/sliding-carousel/SlidingCarousel';
import TopMoviesCarousel from '../../components/top-movies-carousel/TopMoviesCarousel';
import { Container, MovieCardContainer } from './Home.style';

import MovieCard from '../../components/movie-card/MovieCard';
import axios from 'axios';

const Main = ({ movies }) => {
    const [data, setData] = useState(Array(20));

    const discoverMoviesFetch = async () => {
        const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
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

    return (
        <>
            {movies.length ? (
                <MovieCardContainer>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </MovieCardContainer>
            ) : (
                <Container>
                    <TopMoviesCarousel data={data} />
                    <SlidingCarousel data={data} />
                </Container>
            )}
        </>
    );
};

export default Main;

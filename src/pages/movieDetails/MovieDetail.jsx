import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

import {
    Container,
    Genre,
    GenreDiv,
    Iframe,
    IframeDiv,
    Li,
    MovieHeader,
    MovieName,
    Popularity,
    PosterImg,
    RateDiv,
    RateLabel,
    Span,
    Ul,
} from './MovieDetail.style';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [video, setVideo] = useState([]);
    const apiKey = '9b6bf591aeebad9760d36eaff7737990';
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
    const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`;
    // get Movie data func.
    const getMovie = async () => {
        try {
            await axios(url).then((res) => setMovie(res.data));
        } catch (error) {
            console.log(error.message);
        }
    };
    //get Movie Video link
    const getMovieVideo = async () => {
        try {
            await axios(videoUrl).then((res) => setVideo(res.data?.results));
        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(() => {
        getMovie();
        getMovieVideo();
    }, []);

    const videoKey = video?.filter((video) => {
        return (
            video?.name === 'Official Trailer' ||
            video?.name === 'Official Promo'
        );
    });

    const iframeUrl = `https://www.youtube.com/embed/${videoKey[0]?.key}?controls=0`;

    //Popularity rate
    const popularity = JSON.stringify(movie.popularity)?.substring(0, 2);

    //vote color effect
    const voteClass = (vote) => {
        if (vote >= 8) {
            return 'green';
        } else if (vote >= 6) {
            return 'orange';
        } else {
            return 'red';
        }
    };

    return (
        <Container>
            <MovieHeader>
                <MovieName>{movie.title?.toUpperCase()}</MovieName>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                    }}>
                    <RateDiv>
                        <RateLabel>RATE</RateLabel>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                columnGap: '5px',
                            }}>
                            <AiFillStar size={30} color={'yellow'} />
                            <Popularity color={voteClass(movie?.vote_average)}>
                                {movie.vote_average?.toFixed(1)}
                            </Popularity>
                        </div>
                    </RateDiv>
                    <RateDiv>
                        <RateLabel>POPULARITY</RateLabel>
                        <Popularity style={{ border: 'none' }}>
                            {popularity}
                        </Popularity>
                    </RateDiv>
                </div>
            </MovieHeader>
            <IframeDiv>
                {videoKey.length ? (
                    <Iframe
                        src={iframeUrl}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></Iframe>
                ) : (
                    <PosterImg
                        src={`https://image.tmdb.org/t/p/w1280${movie?.poster_path}`}
                    />
                )}
            </IframeDiv>

            <GenreDiv>
                {movie.genres?.map((genre) => {
                    return <Genre key={genre.id}>{genre.name}</Genre>;
                })}
            </GenreDiv>
            <Ul>
                <Li>
                    <Span>Overview</Span> {movie?.overview}
                </Li>
                <Li>
                    <Span>Release Date</Span> {movie?.release_date}
                </Li>
                {movie.tagline && (
                    <Li>
                        <Span>Tagline</Span> {movie?.tagline}
                    </Li>
                )}
            </Ul>
        </Container>
    );
};

export default MovieDetail;

import React from 'react';
import { Card } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {
    CardContainer,
    Container,
    Img,
    Info,
    MovieName,
    Rate,
    RateWrap,
} from './MovieCard.style';

const MovieCard = ({ movie }) => {
    const { backdrop_path, poster_path, title, overview, vote_average, id } =
        movie;
    const navigate = useNavigate();
    return (
        <>
            <CardContainer onClick={() => navigate(`/${id}`)}>
                <Img
                    className="d-block "
                    src={
                        backdrop_path
                            ? `https://image.tmdb.org/t/p/w1280${backdrop_path}`
                            : `https://img.freepik.com/free-photo/professional-lighting-equipment-movie-set-with-smoke-air_1268-17216.jpg?w=826&t=st=1667939729~exp=1667940329~hmac=4e23701e6a3fb0602672509e999666e17ef60c43df6ddadca617269ea4296381`
                    }
                    alt="Slide"
                />
                <RateWrap>
                    <AiFillStar size={20} color={'yellow'} />
                    <Rate>{vote_average}</Rate>
                </RateWrap>
                <MovieName>{title}</MovieName>
                <Info>{overview}</Info>
            </CardContainer>
        </>
    );
};

export default MovieCard;

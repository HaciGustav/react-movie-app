import React from 'react';
import { Card } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import {
    CardContainer,
    Container,
    Img,
    Info,
    MovieName,
    Rate,
    RateWrap,
} from './MovieCard.style';

const MovieCard = () => {
    return (
        <>
            <CardContainer>
                <Img
                    className="d-block "
                    src="https://image.tmdb.org/t/p/w1280/kjFDIlUCJkcpFxYKtE6OsGcAfQQ.jpg"
                    alt="First slide"
                />
                <RateWrap>
                    <AiFillStar size={20} color={'yellow'} />
                    <Rate>8.1</Rate>
                </RateWrap>
                <MovieName>47 Ronin</MovieName>
                <Info></Info>
            </CardContainer>
        </>
    );
};

export default MovieCard;

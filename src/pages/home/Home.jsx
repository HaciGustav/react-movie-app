import React, { useState } from 'react';
import LoginPage from '../loginpage/LoginPage';

import SlidingCarousel from '../../components/sliding-carousel/SlidingCarousel';
import TopMoviesCarousel from '../../components/top-movies-carousel/TopMoviesCarousel';
import { Container } from './Home.style';
import RegisterPage from '../registerPage/RegisterPage';

const Main = () => {
    return (
        <Container>
            <LoginPage />
            <RegisterPage />
            <TopMoviesCarousel />
            <SlidingCarousel />
        </Container>
    );
};

export default Main;

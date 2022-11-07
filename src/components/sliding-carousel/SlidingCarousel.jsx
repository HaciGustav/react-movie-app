import Carousel from 'react-bootstrap/Carousel';
import {
    CardContainer,
    Container,
    H2,
    Img,
    Info,
    MovieName,
    Rate,
    RateWrap,
} from './SlidingCarousel.style';
import { AiFillStar } from 'react-icons/ai';
import { Card, Stack } from 'react-bootstrap';

function SlidingCarousel({ data }) {
    const slide1 = data.slice(0, 4);
    const slide2 = data.slice(5, 9);
    const slide3 = data.slice(10, 14);
    const slides = [slide1, slide2, slide3];

    return (
        <Container style={{ height: '30%' }}>
            <H2>Most Viewed</H2>
            <div className="">
                <Carousel style={{}}>
                    {slides.map((slide) => (
                        <Carousel.Item
                            interval={2000}
                            style={{ backgroundColor: '#000' }}>
                            <Stack
                                direction="horizontal"
                                className="h-100 justify-content-center align-items-center"
                                gap={3}>
                                {slide.map((movie) => {
                                    return (
                                        <CardContainer key={movie.id}>
                                            <Img
                                                className="d-block "
                                                src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                                                alt="Slide"
                                            />
                                            <RateWrap>
                                                <AiFillStar
                                                    size={20}
                                                    color={'yellow'}
                                                />
                                                <Rate>
                                                    {movie.vote_average}
                                                </Rate>
                                            </RateWrap>
                                            <MovieName>{movie.title}</MovieName>
                                            <Info>{movie.overview}</Info>
                                        </CardContainer>
                                    );
                                })}
                            </Stack>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </Container>
    );
}

export default SlidingCarousel;

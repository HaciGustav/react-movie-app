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

function SlidingCarousel() {
    return (
        <Container style={{ height: '30%' }}>
            <H2>Drama</H2>
            <div className="">
                <Carousel style={{}}>
                    {[''].map((slide) => (
                        <Carousel.Item
                            interval={2000}
                            style={{ backgroundColor: '#000' }}>
                            <Stack
                                direction="horizontal"
                                className="h-100 justify-content-center align-items-center"
                                gap={3}>
                                {['', '', '', ''].map((card, i) => {
                                    return (
                                        <CardContainer key={i}>
                                            <Img
                                                className="d-block "
                                                src="https://image.tmdb.org/t/p/w1280/kjFDIlUCJkcpFxYKtE6OsGcAfQQ.jpg"
                                                alt="First slide"
                                            />
                                            <RateWrap>
                                                <AiFillStar
                                                    size={20}
                                                    color={'yellow'}
                                                />
                                                <Rate>8.1</Rate>
                                            </RateWrap>
                                            <MovieName>47 Ronin</MovieName>
                                            <Info>
                                                Nearly 5,000 years after he was
                                                bestowed with the almighty
                                                powers of the Egyptian gods—and
                                                imprisoned just as quickly—Black
                                                Adam is freed from his earthly
                                                tomb, ready to unleash his
                                                unique form of justice on the
                                                modern world. Adam is freed from
                                                his earthly tomb, ready to
                                                unleash his unique form of
                                                justice on the modern world.
                                            </Info>
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

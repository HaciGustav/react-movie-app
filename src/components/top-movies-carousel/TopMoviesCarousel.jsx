import Carousel from 'react-bootstrap/Carousel';
import {
    Caption,
    Img,
    InfoDiv,
    Label,
    Overview,
    Poster,
} from './TopMoviesCarousel.style';

function TopMoviesCarousel() {
    return (
        <Carousel
            style={{
                height: '50%',
                backgroundColor: 'transparent',
                color: '#000',
                position: 'relative',
            }}>
            <Carousel.Item interval={1500}>
                <Img
                    className="d-block w-100"
                    alt="First slide"
                    src="https://image.tmdb.org/t/p/w1280/naNXYdBzTEb1KwOdi1RbBkM9Zv1.jpg"
                />
                <Caption>
                    <Poster src="https://image.tmdb.org/t/p/w1280/kjFDIlUCJkcpFxYKtE6OsGcAfQQ.jpg" />
                    <InfoDiv>
                        <Label>Movie Name</Label>
                        <Overview>
                            Despite his family's baffling generations-old ban on
                            music, Miguel dreams of becoming an accomplished
                            musician like his idol, Ernesto de la Cruz.
                        </Overview>
                    </InfoDiv>
                </Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <Img
                    className="d-block w-100"
                    alt="First slide"
                    src="https://image.tmdb.org/t/p/w1280/naNXYdBzTEb1KwOdi1RbBkM9Zv1.jpg"
                />
                <Caption>
                    <Poster src="https://image.tmdb.org/t/p/w1280/kjFDIlUCJkcpFxYKtE6OsGcAfQQ.jpg" />
                    <InfoDiv>
                        <Label>Movie Name</Label>
                        <Overview>
                            Despite his family's baffling generations-old ban on
                            music, Miguel dreams of becoming an accomplished
                            musician like his idol, Ernesto de la Cruz.
                            Desperate to prove his talent, Miguel finds himself
                            in the stunning and colorful Land of the Dead
                            following a mysterious chain of events. Along the
                            way, he meets charming trickster Hector, and
                            together, they set off on an extraordinary journey
                            to unlock the real story behind Miguel's family
                            history.
                        </Overview>
                    </InfoDiv>
                </Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <Img
                    className="d-block w-100"
                    alt="First slide"
                    src="https://image.tmdb.org/t/p/w1280/naNXYdBzTEb1KwOdi1RbBkM9Zv1.jpg"
                />
                <Caption>
                    <Poster src="https://image.tmdb.org/t/p/w1280/kjFDIlUCJkcpFxYKtE6OsGcAfQQ.jpg" />
                    <InfoDiv>
                        <Label>Movie Name</Label>
                        <Overview>
                            Despite his family's baffling generations-old ban on
                            music, Miguel dreams of becoming an accomplished
                            musician like his idol, Ernesto de la Cruz.
                            Desperate to prove his talent, Miguel finds himself
                            in the stunning and colorful Land of the Dead
                            following a mysterious chain of events. Along the
                            way, he meets charming trickster Hector, and
                            together, they set off on an extraordinary journey
                            to unlock the real story behind Miguel's family
                            history.
                        </Overview>
                    </InfoDiv>
                </Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default TopMoviesCarousel;

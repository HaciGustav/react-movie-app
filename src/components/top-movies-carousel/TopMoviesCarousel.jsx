import Carousel from 'react-bootstrap/Carousel';
import {
    Caption,
    Img,
    InfoDiv,
    Label,
    Overview,
    Poster,
} from './TopMoviesCarousel.style';

function TopMoviesCarousel({ data }) {
    const topMovies = data.slice(0, 10);

    console.log(topMovies);
    return (
        <Carousel
            style={{
                height: '50%',
                backgroundColor: 'transparent',
                color: '#000',
                position: 'relative',
            }}>
            {topMovies.map((movie) => {
                return (
                    <Carousel.Item key={movie?.id} interval={1500}>
                        <Img
                            className="d-block w-100"
                            alt="Slide"
                            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                        />
                        <Caption>
                            <Poster
                                src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                            />
                            <InfoDiv>
                                <Label>{movie.title}</Label>
                                <Overview>{movie.overview}</Overview>
                            </InfoDiv>
                        </Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
}

export default TopMoviesCarousel;

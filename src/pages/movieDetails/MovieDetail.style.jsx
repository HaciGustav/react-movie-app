import styled from 'styled-components';

export const Container = styled.section`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;

    row-gap: 1rem;
`;

export const MovieHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MovieName = styled.h2`
    font-size: 2.5em;
    color: white;
    padding: 0.3rem;

    @media (max-width: 415px) {
        font-size: 1em;
    }
    @media (min-width: 415px) and (max-width: 600px) {
        font-size: 1.5em;
    }
`;
export const RateDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0;
    justify-content: center;
    align-items: center;
    /* border: 1px solid #ff000040; */
`;
export const RateLabel = styled.p`
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
    @media (max-width: 560px) {
        font-size: 1rem;
    }
`;

export const Popularity = styled.span`
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    margin: 0;
    color: red;
    border-right: 4px solid ${({ color }) => color && color};
    border-bottom: 4px solid ${({ color }) => color && color};
    @media (max-width: 560px) {
        font-size: 1rem;
    }
`;
export const IframeDiv = styled.div`
    display: flex;
    justify-content: center;
`;
export const Iframe = styled.iframe`
    width: 560px;
    height: 315px;
`;
export const PosterImg = styled.img`
    width: 50%;
`;
export const GenreDiv = styled(IframeDiv)`
    justify-content: start;
    column-gap: 5px;
`;
export const Genre = styled.span`
    border: 1px solid darkred;
    padding: 0.4rem;
    border-radius: 1rem;
    color: red;
`;
export const Ul = styled.ul``;
export const Li = styled.li`
    padding: 0.5rem;
    border: 1px solid #ff000040;
    list-style-type: none;
    color: white;
`;
export const Span = styled.span`
    font-weight: 600;
    color: red;
`;

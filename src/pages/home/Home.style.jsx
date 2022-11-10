import styled from 'styled-components';

export const Container = styled.section`
    width: 80%;
    margin: auto;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

export const MovieCardContainer = styled.div`
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    @media (max-width: 760px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 560px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 420px) {
        grid-template-columns: 1fr;
    }
`;

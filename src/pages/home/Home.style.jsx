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
`;

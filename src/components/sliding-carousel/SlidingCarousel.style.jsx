import styled from 'styled-components';

export const H2 = styled.h2`
    text-align: left;
    border-left: 10px solid #ff000097;
    padding: 0.2rem;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
`;

export const Info = styled.div`
    background-color: #000000b3;
    color: white;
    line-height: 1.1;
    font-size: 0.9rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem;

    overflow: hidden;
    transform: translateX(100%);
    visibility: hidden;
    transition: transform 0.5s;
`;
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    position: relative;
    &:hover ${Info} {
        transform: translateX(0%);
        visibility: visible;
    }
`;
export const Img = styled.img`
    width: 100%;
`;

export const RateWrap = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
    padding-top: 2px;
`;
export const Rate = styled.span`
    font-size: 1rem;
    color: #eee;
`;
export const MovieName = styled.h3`
    font-size: 1.2rem;
    text-align: left;
    padding-left: 3px;
    color: #eee;
`;

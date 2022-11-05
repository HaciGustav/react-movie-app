import styled from 'styled-components';

export const Img = styled.img`
    width: 100%;
`;
export const Caption = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: end;
    width: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 15px,
        rgba(255, 255, 255, 0) 60%
    );
    color: #fff;
    max-height: 50%;
`;

export const Poster = styled.img`
    margin-left: 5px;
    width: 18%;
`;
export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-inline: 1rem;
    padding-bottom: 1rem;
`;
export const Label = styled.p`
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0 0.5rem;
    color: #ccc;
`;
export const Overview = styled.p`
    font-size: 0.9rem;
    line-height: 1;
    margin-bottom: 25px;

    word-wrap: break-word;
    @media (max-width: 576px) {
    }
    @media (max-width: 768px) {
    }
`;

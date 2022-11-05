import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #222;
`;
export const Contact = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    margin-top: 1.5rem;
    padding: 0.5rem;
    column-gap: 10px;
    background-color: #000;
`;
export const CopyRight = styled(Contact)`
    font-size: 0.8rem;
    color: white;
`;

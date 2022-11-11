import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 0.5rem;
`;

export const Input = styled.input`
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    border-bottom: 4px solid #aaa;

    transition: all 0.5s;
    &:focus {
        outline: none;
        background-color: #aaa;
    }
    &:hover {
        background-color: #aaa;
    }
`;
export const BtnWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
export const Submit = styled.button`
    padding: 0.3rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #440000;
    align-self: center;
    transition: all 0.2s;
    &:hover {
        color: darkred;
        font-weight: 600;
    }
    &:active {
        transform: scale(0.95);
    }
`;

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
    background-color: #aaa;

    &:focus {
        outline: none;
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
    color: #444;
    align-self: center;
`;

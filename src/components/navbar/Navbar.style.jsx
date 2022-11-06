import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #222;
    height: 3rem;
`;

export const SearchBar = styled.input`
    border: none;
    border-radius: 5px 0 0 5px;
    width: 100%;
    padding: 0.5rem;

    &:focus {
        outline: none;
    }
`;
export const SearchBtn = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: #fff;
    color: #222;
    padding-inline: 0.5rem;
    cursor: pointer;
`;
export const Form = styled.form`
    display: flex;
    width: 30%;
    height: 2rem;
`;
export const SignInBtn = styled(SearchBtn)`
    border: none;
    border-radius: 0;
    background-color: inherit;
    height: 100%;
    color: #000;

    &:hover {
        background-color: #a70000c9;
        border-bottom: 4px solid #2c0000;
    }
`;
export const SignUpBtn = styled(SignInBtn)``;
export const BtnWrap = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
    height: 100%;
`;

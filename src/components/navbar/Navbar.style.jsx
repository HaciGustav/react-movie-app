import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #333;
    height: 2.5rem;
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
    border: none;
    border-radius: 0 5px 5px 0;
    background-color: #fff;
    color: #222;
`;
export const Form = styled.form`
    display: flex;
    width: 30%;
    height: 80%;
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
    column-gap: 5px;
    height: 100%;
`;
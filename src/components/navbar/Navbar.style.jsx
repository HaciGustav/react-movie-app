import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #440000;
    height: 3rem;
`;
export const Logo = styled.span`
    cursor: pointer;
`;
export const Part1 = styled.span`
    color: #000;
    font-size: 1.7rem;
`;
export const Part2 = styled.span`
    color: white;
    font-size: 1.2rem;
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
    color: #ccc;
    font-weight: 500;

    &:hover {
        color: #000;
        border-bottom: 4px solid #000;
    }
    @media (max-width: 560px) {
        display: none;
    }
`;
export const SignUpBtn = styled(SignInBtn)`
    display: none;
    @media (max-width: 560px) {
        display: inline;
    }
`;
export const BtnWrap = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
    height: 100%;
`;
export const Avatar = styled.img`
    vertical-align: middle;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;
`;

export const HamburgerMenü = styled.ul`
    display: ${({ isShown }) => (isShown ? 'block' : 'none')};
    position: absolute;
    right: 0;
    background-color: white;
    transform: translateY(0%);
    z-index: 5;
    background-color: #333;

    border-radius: 10px 0 10px 10px;
    padding: 0.5rem;
    /* &:hover {
        display: block;
    } */
`;
export const Li = styled.li`
    list-style-type: none;
    margin-bottom: 0.5rem;
`;
export const HamburgerWrap = styled.span`
    position: relative;
    z-index: 5;
    display: none;
    cursor: pointer;
    position: relative;
    &:hover ${HamburgerMenü} {
        display: block;
    }

    @media (max-width: 560px) {
        display: inline;
    }
`;

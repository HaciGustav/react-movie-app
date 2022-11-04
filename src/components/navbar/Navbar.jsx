import React from 'react';
import {
    BtnWrap,
    Form,
    Nav,
    SearchBar,
    SearchBtn,
    SignInBtn,
    SignUpBtn,
} from './Navbar.style';
import { BsSearch } from 'react-icons/bs';

const Navbar = () => {
    return (
        <Nav>
            {' '}
            <span>LOGO</span>
            <Form>
                <SearchBar />
                <SearchBtn>
                    <BsSearch size={17} />
                </SearchBtn>
            </Form>
            <BtnWrap>
                <SignInBtn>LOGIN</SignInBtn> <SignUpBtn>REGISTER</SignUpBtn>
            </BtnWrap>
        </Nav>
    );
};

export default Navbar;

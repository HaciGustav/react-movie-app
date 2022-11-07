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
import { useUserContext } from '../../context/UserProvider';
import { useAuthContext } from '../../context/AuthProvider';
import { AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
    const { handleShowLogin, handleShowRegister } = useUserContext();
    const { user, handleLogout } = useAuthContext();

    return (
        <Nav>
            <span>LOGO</span>
            <Form>
                <SearchBar />
                <SearchBtn>
                    <BsSearch size={17} />
                </SearchBtn>
            </Form>
            <BtnWrap>
                {user ? (
                    <>
                        <SignInBtn onClick={handleLogout}>LOG OUT</SignInBtn>
                        <AiOutlineUser
                            size={30}
                            color="#000"
                            style={{
                                backgroundColor: '#444',
                                borderRadius: '50%',
                            }}
                        />
                    </>
                ) : (
                    <>
                        <SignInBtn onClick={handleShowLogin}>LOG IN</SignInBtn>
                        <SignUpBtn onClick={handleShowRegister}>
                            REGISTER
                        </SignUpBtn>
                    </>
                )}
            </BtnWrap>
        </Nav>
    );
};

export default Navbar;

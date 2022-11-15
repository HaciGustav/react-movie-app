import React, { useState } from 'react';
import {
    Avatar,
    BtnWrap,
    Form,
    HamburgerWrap,
    Logo,
    Nav,
    Part1,
    Part2,
    SearchBar,
    SearchBtn,
    SignInBtn,
    SignUpBtn,
    Li,
    HamburgerMenü,
} from './Navbar.style';
import { BsSearch } from 'react-icons/bs';
import { useUserContext } from '../../context/UserProvider';

import { AiOutlineUser } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import LoginPage from '../../pages/loginpage/LoginPage';
import RegisterPage from '../../pages/registerPage/RegisterPage';
import { useNavigate } from 'react-router-dom';
import { auth, handleLogout } from '../../auth/firebase';

const Navbar = ({ searchValue, setSearchValue, handleSearch, setMovies }) => {
    const { currentUser } = useUserContext();
    const { email, photoURL, displayName } = currentUser;
    const [user, setUser] = useState();

    //LOGIN PAGE
    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    //REGISTER PAGE
    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const login = {
        showLogin,
        setShowLogin,
        handleCloseLogin,
        handleShowLogin,
        handleShowRegister,
    };
    const register = {
        showRegister,
        setShowRegister,
        handleCloseRegister,
        handleShowRegister,
        firstName,
        setFirstName,
        lastName,
        setLastName,
    };

    const navigate = useNavigate();
    const LoggedIn = (
        <>
            <SignInBtn onClick={() => handleLogout(setUser)}>
                {currentUser.displayName ? displayName.toUpperCase() : 'USER'}
            </SignInBtn>
            <Avatar src={'./assets/avatar2.jpg'} />
            <HamburgerWrap>
                <GiHamburgerMenu />
                <HamburgerMenü>
                    <Li></Li>
                </HamburgerMenü>
            </HamburgerWrap>
        </>
    );
    const NotLoggedIn = (
        <>
            <SignInBtn onClick={handleShowLogin}>LOG IN</SignInBtn>
            <SignUpBtn onClick={handleShowRegister}>REGISTER</SignUpBtn>
        </>
    );
    return (
        <Nav>
            <Logo
                onClick={() => {
                    setMovies([]);
                    navigate('/');
                }}>
                <Part1>HG</Part1>
                <Part2>MOVIES</Part2>
            </Logo>
            <LoginPage user={user} setUser={setUser} login={login} />
            <RegisterPage user={user} setUser={setUser} register={register} />
            <Form>
                <SearchBar
                    type={'search'}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder={'Search movies...'}
                />
                <SearchBtn
                    onClick={(e) => {
                        handleSearch(e, user, handleShowLogin);
                        navigate('/');
                        setSearchValue('');
                    }}>
                    <BsSearch size={17} />
                </SearchBtn>
            </Form>
            <BtnWrap>{user ? LoggedIn : NotLoggedIn}</BtnWrap>
        </Nav>
    );
};

export default Navbar;

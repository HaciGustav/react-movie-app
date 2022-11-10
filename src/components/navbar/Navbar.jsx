import React, { useState } from 'react';
import {
    BtnWrap,
    Form,
    Logo,
    Nav,
    Part1,
    Part2,
    SearchBar,
    SearchBtn,
    SignInBtn,
    SignUpBtn,
} from './Navbar.style';
import { BsSearch } from 'react-icons/bs';
import { useUserContext } from '../../context/UserProvider';

import { AiOutlineUser } from 'react-icons/ai';
import LoginPage from '../../pages/loginpage/LoginPage';
import RegisterPage from '../../pages/registerPage/RegisterPage';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../../auth/firebase';

const Navbar = ({ searchValue, setSearchValue, handleSearch, setMovies }) => {
    // const { handleShowLogin, handleShowRegister } = useUserContext();
    const [user, setUser] = useState();
    //LOGIN PAGE
    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    //REGISTER PAGE
    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);
    const login = {
        showLogin,
        setShowLogin,
        handleCloseLogin,
        handleShowLogin,
    };
    const register = {
        showRegister,
        setShowRegister,
        handleCloseRegister,
        handleShowRegister,
    };

    const navigate = useNavigate();
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
            <BtnWrap>
                {user ? (
                    <>
                        <SignInBtn onClick={() => handleLogout(setUser)}>
                            LOG OUT
                        </SignInBtn>
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

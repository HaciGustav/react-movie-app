import React, { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { useUserContext } from '../../context/UserProvider';

import { BtnWrapper, Form, Input, Submit } from './LoginPage.style';
import { handleLogin } from '../../auth/firebase';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ user, setUser }) => {
    const { showLogin, handleCloseLogin, handleShowLogin, handleShowRegister } =
        useUserContext();
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleEmail = (e) => {
        setLoginEmail(e.target.value);
        console.log(loginEmail);
    };
    const handlePassword = (e) => {
        setLoginPassword(e.target.value);
        console.log(loginPassword);
    };
    const navigate = useNavigate();
    return (
        <>
            <Offcanvas
                show={showLogin}
                onHide={handleCloseLogin}
                style={{ backgroundColor: '#222 ', color: '#000' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Login</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        <Input
                            onChange={(e) => handleEmail(e)}
                            value={loginEmail}
                            type={'email'}
                            placeholder="Email Adress"
                        />
                        <Input
                            onChange={(e) => handlePassword(e)}
                            value={loginPassword}
                            type={'password'}
                            placeholder="Password"
                        />
                        <BtnWrapper>
                            <Submit
                                onClick={(e) => {
                                    handleLogin(
                                        e,
                                        loginEmail,
                                        loginPassword,
                                        setLoginEmail,
                                        setLoginPassword,
                                        setUser
                                    );
                                    handleCloseLogin();
                                }}>
                                LOGIN
                            </Submit>
                            <Submit
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleCloseLogin();
                                    handleShowRegister();
                                }}>
                                REGISTER
                            </Submit>
                        </BtnWrapper>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default LoginPage;

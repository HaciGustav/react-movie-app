import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useUserContext } from '../../context/UserProvider';
import { useAuthContext } from '../../context/AuthProvider';
import { Form, Input, Submit } from './LoginPage.style';

const LoginPage = () => {
    const { showLogin, handleCloseLogin, handleShowLogin } = useUserContext();
    const {
        loginEmail,
        loginPassword,
        setLoginEmail,
        setLoginPassword,
        handleLogin,
    } = useAuthContext();
    const handleEmail = (e) => {
        setLoginEmail(e.target.value);
        console.log(loginEmail);
    };
    const handlePassword = (e) => {
        setLoginPassword(e.target.value);
        console.log(loginPassword);
    };

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
                        <Submit
                            onClick={(e) => {
                                handleLogin(e);
                                handleCloseLogin();
                            }}>
                            LOGIN
                        </Submit>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default LoginPage;

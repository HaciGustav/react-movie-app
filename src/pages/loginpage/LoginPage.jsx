import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
    BtnWrapper,
    Form,
    Input,
    SignInGoogleBtn,
    Submit,
} from './LoginPage.style';
import { handleLogin, signUpWithGoogle } from '../../auth/firebase';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ user, setUser, login }) => {
    const { showLogin, handleCloseLogin, handleShowRegister } = login;

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleEmail = (e) => {
        setLoginEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setLoginPassword(e.target.value);
    };
    const navigate = useNavigate();

    return (
        <>
            <Offcanvas
                show={showLogin}
                onHide={handleCloseLogin}
                style={{
                    backgroundColor: '#440000 ',
                    borderRight: '8px solid black',
                    color: '#000',
                }}>
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
                                    handleShowRegister();
                                    handleCloseLogin();
                                }}>
                                REGISTER
                            </Submit>{' '}
                        </BtnWrapper>
                        <SignInGoogleBtn
                            onClick={(e) => {
                                e.preventDefault();
                                signUpWithGoogle(setUser);
                                handleCloseLogin();
                                console.log(user);
                            }}>
                            <FcGoogle /> Continue With Google
                        </SignInGoogleBtn>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default LoginPage;

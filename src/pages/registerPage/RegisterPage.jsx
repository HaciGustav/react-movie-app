import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useUserContext } from '../../context/UserProvider';
import { useAuthContext } from '../../context/AuthProvider';
import { Form, Input, Submit } from './RegisterPage.style';

const RegisterPage = () => {
    const { showRegister, handleCloseRegister, handleShowRegister } =
        useUserContext();
    const {
        registerEmail,
        registerPassword,
        setRegisterEmail,
        setRegisterPassword,
        handleRegister,
    } = useAuthContext();
    const handleEmail = (e) => {
        setRegisterEmail(e.target.value);
        console.log(registerEmail);
    };
    const handlePassword = (e) => {
        setRegisterPassword(e.target.value);
        console.log(registerPassword);
    };

    return (
        <>
            <Offcanvas
                show={showRegister}
                onHide={handleCloseRegister}
                style={{ backgroundColor: '#222 ', color: '#000' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Register</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        <Input
                            onChange={(e) => handleEmail(e)}
                            value={registerEmail}
                            type={'email'}
                            placeholder="Email Adress"
                            required
                        />
                        <Input
                            onChange={(e) => handlePassword(e)}
                            value={registerPassword}
                            type={'password'}
                            placeholder="Password"
                            required
                        />
                        <Submit
                            onClick={(e) => {
                                handleRegister(e);
                                handleCloseRegister();
                            }}>
                            sign up
                        </Submit>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default RegisterPage;

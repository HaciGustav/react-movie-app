import React, { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';

import { Form, Input, Submit } from './RegisterPage.style';
import { handleRegister } from '../../auth/firebase';
const RegisterPage = ({ user, setUser, register }) => {
    const {
        showRegister,
        handleCloseRegister,
        firstName,
        setFirstName,
        lastName,
        setLastName,
    } = register;
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const handleEmail = (e) => {
        setRegisterEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setRegisterPassword(e.target.value);
    };

    return (
        <>
            <Offcanvas
                show={showRegister}
                onHide={handleCloseRegister}
                style={{
                    backgroundColor: '#440000 ',
                    borderRight: '8px solid black',
                    color: '#000',
                }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Register</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        <Input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type={'text'}
                            placeholder="First Name"
                            required
                        />
                        <Input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type={'text'}
                            placeholder="Last Name"
                            required
                        />
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
                                handleRegister(
                                    e,
                                    registerEmail,
                                    registerPassword,
                                    setRegisterEmail,
                                    setRegisterPassword,
                                    setUser,
                                    firstName,
                                    lastName
                                );
                                handleCloseRegister();
                            }}>
                            REGISTER
                        </Submit>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default RegisterPage;

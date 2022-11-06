import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Form, Input, Submit } from './LoginPage.style';

const LoginPage = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(Offcanvas.Body);

    return (
        <>
            <Offcanvas
                show={show}
                onHide={handleClose}
                style={{ backgroundColor: '#222 ', color: '#000' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Login</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        <Input type={'email'} placeholder="Email Adress" />
                        <Input type={'password'} placeholder="Password" />
                        <Submit>LOGIN</Submit>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default LoginPage;

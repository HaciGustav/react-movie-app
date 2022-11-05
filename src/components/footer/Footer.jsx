import React from 'react';
import { Contact, Container, CopyRight } from './Footer.style';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

const Footer = () => {
    return (
        <Container>
            <Contact>
                <AiFillGithub size={25} color={'white'} />
                <AiFillLinkedin size={25} color={'white'} />
                <AiFillMail size={25} color={'white'} />
            </Contact>
            <CopyRight>
                <p>© {new Date().getFullYear()} by HaciGustav</p>
            </CopyRight>
        </Container>
    );
};

export default Footer;

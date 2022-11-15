import React from 'react';
import { Contact, Container, CopyRight, Link } from './Footer.style';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { toastSuccessNotify } from '../../helpers/ToastNotify';

const Footer = () => {
    return (
        <Container>
            <Contact>
                <Link href={'https://github.com/HaciGustav'}>
                    <AiFillGithub size={25} color={'white'} />
                </Link>
                <Link href={'https://www.linkedin.com/in/mehmet-f-k/'}>
                    <AiFillLinkedin size={25} color={'white'} />
                </Link>
                <Link href={'mailto:mehmetfkuruldak@gmail.com'}>
                    <AiFillMail size={25} color={'white'} />
                </Link>
            </Contact>
            <CopyRight>
                <p>© {new Date().getFullYear()} by HaciGustav</p>
            </CopyRight>
        </Container>
    );
};

export default Footer;

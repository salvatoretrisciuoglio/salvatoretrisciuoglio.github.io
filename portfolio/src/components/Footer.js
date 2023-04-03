import React from 'react';
import logo from '../logo.svg';
import { Icon } from '@iconify/react';
import linkedinIcon from '@iconify-icons/mdi/linkedin';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="made-by">
                <p>Made by Salvatore Trisciuoglio</p>
                <img src={logo} className="react-logo" alt="logo" />
            </div>
            <div className="social-icons-right">
                <a href="https://www.linkedin.com/in/salvatore-trisciuoglio-8550ab1bb/">
                    <Icon icon={linkedinIcon} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
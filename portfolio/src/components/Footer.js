import React from 'react';
import { Icon } from '@iconify/react';
import linkedinIcon from '@iconify-icons/mdi/linkedin';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>Made by Salvatore Trisciuoglio</p>
                    </div>
                    <div className="social-icons social-icons-right">
                        <a href="https://www.linkedin.com/in/salvatore-trisciuoglio-8550ab1bb/">
                            <Icon icon={linkedinIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
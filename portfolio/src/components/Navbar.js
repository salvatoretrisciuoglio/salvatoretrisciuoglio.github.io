import React from 'react';
import '../styles/Navbar.css';
import { Icon } from '@iconify/react';

import homeIcon from '@iconify-icons/mdi/home';
function Navbar() {
    return (
        <div class="topnav">
            <a class="home" href="#home">Salvatore <br></br>Trisciuoglio</a>
            {/* <a class="active" href="#home"> <Icon icon={homeIcon} style={{ width: 35, height: 35, padding: 0 }} /></a> */}
            <a href="#news" class="active" >News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    );
}

export default Navbar;
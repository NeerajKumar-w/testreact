import React from 'react';
import './Header.css';
import logo from '../Assets/logo.jpg'
function Header() {
    return (
        <div className='Header'>
            <div><img src={logo} alt='placeholder'></img></div>
            <div><h1>Fake News</h1></div>
            <div><button>Subscribe</button></div>
        </div>
    );
}

export default Header;
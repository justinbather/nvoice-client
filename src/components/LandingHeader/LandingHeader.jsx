import './LandingHeader.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const LandingHeader = () => {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <Link to='/'><h2 className='header__logo'>Nvoice</h2></Link>
            </nav>
        </header>
    );
};

export default LandingHeader;
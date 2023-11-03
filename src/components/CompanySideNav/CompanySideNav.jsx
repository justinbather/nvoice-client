import React from 'react';
import './CompanySideNav.scss';
import { Link } from 'react-router-dom';

const CompanySideNav = () => {
    return (
        <div className='sidenav'>
            <Link to='/company/home'><p className='sidenav__button active'>Overview</p></Link>
            <Link to='/company/create-invoice'><p className='sidenav__button'>New Invoice</p></Link>
        </div>
    );
};

export default CompanySideNav;
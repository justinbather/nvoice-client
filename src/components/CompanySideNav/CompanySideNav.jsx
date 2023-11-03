import React from 'react';
import './CompanySideNav.scss';

const CompanySideNav = () => {
    return (
        <div className='sidenav'>
            <p className='sidenav__button active'>Overview</p>
            <p className='sidenav__button'>New Invoice</p>
        </div>
    );
};

export default CompanySideNav;
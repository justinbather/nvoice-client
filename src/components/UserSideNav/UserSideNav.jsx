import './UserSideNav.scss';
import { Link } from 'react-router-dom';

const UserSideNav = () => {
    return (
        <div className='sidenav'>
            <Link to='/user/home'><p className='sidenav__button active'>Overview</p></Link>
        </div>
    );
};

export default UserSideNav;
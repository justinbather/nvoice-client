import './UserHomePage.scss';
import UserSideNav from '../../components/UserSideNav/UserSideNav';
import UserOverview from "../../components/UserOverview/UserOverview";


const UserHomePage = () => {
    return (
        <div className='homepage'>
            <UserSideNav />
            <UserOverview />
        </div>
    );
};

export default UserHomePage;
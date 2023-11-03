import './UserLoginPage.scss';
import LandingHeader from '../../components/LandingHeader/LandingHeader';
import UserLogin from '../../components/UserLogin/UserLogin';

const UserLoginPage = () => {
    return (
        <div className='background'>
            <UserLogin />  
        </div>
    );
};

export default UserLoginPage;
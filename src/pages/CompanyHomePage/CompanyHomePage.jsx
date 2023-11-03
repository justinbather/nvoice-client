import './CompanyHomePage.scss';
import CompanySideNav from '../../components/CompanySideNav/CompanySideNav';
import CompanyOverview from '../../components/CompanyOverview/CompanyOverview';

const CompanyHomePage = () => {
    return (
        <div className='homepage'>
            <CompanySideNav />
            <CompanyOverview />
        </div>
    );
};

export default CompanyHomePage;
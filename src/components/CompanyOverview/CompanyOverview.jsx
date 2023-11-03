import './CompanyOverview.scss';
import { Link } from 'react-router-dom';

const CompanyOverview = () => {
    return (
        <div className='overview'>
            
            <section className="overview__outstanding">

                <h2 className="overview__title">Outstanding</h2>

                <div className="overview__tilelist">

                    <div className="tile">
                        <h3 className="tile__amount">$755.00</h3>
                        <p className="tile__email">email@email.com</p>
                        <p className="tile__date">2023/11/3</p>
                        <Link to='/company/invoice/:id'><button className='tile__button'>More Info</button></Link>
                    </div>

                </div>
            </section>


            <section className="overview__paid">
                <h2 className="overview__title">Paid</h2>
                <div className="overview__tilelist">
                    <div className="tile">
                    <h3 className="tile__amount">$755.00</h3>
                        <p className="tile__email">email@email.com</p>
                        <p className="tile__date">2023/11/3</p>
                        <button className='tile__button'>More Info</button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CompanyOverview;
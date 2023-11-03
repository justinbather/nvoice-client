import './CompanyLogin.scss';
import { Link } from 'react-router-dom';

const CompanyLogin = () => {
    return (
        <div className='form__container'>
        <form action="" className='corporate'>
            <h2 className="corporate__title">Get Back To Business</h2>
            
            <section className="corporate__section">
                <label htmlFor="username" className='label'>Username:</label>
                <input type="text" placeholder='email@email.com' className='corporate__input form__input' name='username'/>
            </section>

            <section className="corporate__section">
                <label htmlFor="corporate__password" className='label'>Password:</label>
                <input type="password" className='corporate__input form__input' name='password' placeholder='password'/>
            </section>

            <button className='corporate__submit'>Login</button>

        </form>
    </div>
    );
};

export default CompanyLogin;
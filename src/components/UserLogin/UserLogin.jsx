import './UserLogin.scss';

const UserLogin = () => {
    return (
        <div className='background'>

        <div className='form__container'>
            <form action="" className='user'>
                <h2 className="user__title">Welcome Back</h2>
                
                <section className="user__section">
                    <label htmlFor="username" className='label'>Username:</label>
                    <input type="text" placeholder='email@email.com' className='user__input form__input' name='username'/>
                </section>

                <section className="user__section">
                    <label htmlFor="user__password" className='label'>Password:</label>
                    <input type="password" className='user__input form__input' name='password' placeholder="password"/>
                </section>

                <button className='user__submit'>Login</button>

            </form>
        </div>

        </div>
    );
};

export default UserLogin;
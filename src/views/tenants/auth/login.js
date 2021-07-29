import React, { Component } from 'react';


import NavBar from 'components/shared/nav-bar';
import Footer from 'components/shared/footer';
import UserLoginForm from './components/login-form';
import Preloader from 'components/preloader/preloader';
import { useSelector } from 'react-redux';

const UserLogin = () => {
    const user_login = useSelector(state => state.login)
    const {loading} = user_login;
    return (
        <div>
            <Preloader loading={loading}/>
            <NavBar/>

            <main id="content">
                <section className="py-7">
                    <div className="container">
                        <div className="row justify-content-center">
                            <UserLoginForm />         
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}

export default UserLogin;

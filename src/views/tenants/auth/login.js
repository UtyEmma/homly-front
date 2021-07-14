import React, { Component } from 'react';


import NavBar from '../../layouts/shared/nav-bar';
import Footer from '../../layouts/shared/footer';
import UserLoginForm from './components/login-form';

const UserLogin = () => {
    return (
        <div>
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

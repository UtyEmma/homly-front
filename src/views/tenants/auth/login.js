import React, { Component } from 'react';


import NavBar from 'views/layouts/nav-bar';
import Footer from 'views/layouts/footer';
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

import React, { Component, useEffect } from 'react';


import NavBar from 'components/shared/nav-bar';
import Footer from 'components/shared/footer';
import UserLoginForm from './components/login-form';
import { useSelector } from 'react-redux';

const UserLogin = ({isLoading}) => {

    const {loading} = useSelector(state => state.login)
    
    useEffect(() => {
    }, [loading])

    return (
        <div>
            <NavBar/>

            <main id="content">
                <section className="py-7">
                    <div className="container">
                        <div className="row justify-content-center">
                            <UserLoginForm isLoading={isLoading} />         
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}

export default UserLogin;

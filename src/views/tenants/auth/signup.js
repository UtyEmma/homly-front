import React, { Component, useState } from 'react'

import SignUpForm from './components/signup-form';
import NavBar from 'components/shared/nav-bar';
import Footer from 'components/shared/footer';
import Preloader from 'components/preloader/preloader';
import { useSelector } from 'react-redux';

export default function UserSignup () {
    const userSignup = useSelector((state) => state.signup);
    const {loading, error, success} = userSignup;

    return (
        <div>
            <NavBar/>
            <Preloader loading={loading}/>
            <main id="content">
                <section className="py-7">
                    <div className="container">
                        <div className="row justify-content-center">
                            <SignUpForm />         
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )

}

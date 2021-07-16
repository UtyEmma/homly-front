import React, { Component, useState } from 'react'

import SignUpForm from './components/signup-form';
import NavBar from 'views/layouts/nav-bar';
import Footer from 'views/layouts/footer';

export default function UserSignup () {
    return (
        <div>
            <NavBar/>

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

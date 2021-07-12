import React, { Component, useState } from 'react'

import SignUpForm from '../../layouts/auth/signup-form';
import NavBar from '../../layouts/shared/nav-bar';
import Footer from '../../layouts/shared/footer';

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

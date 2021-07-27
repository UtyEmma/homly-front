import React, { Component, useState } from 'react'

import SignUpForm from './components/signup-form';
import NavBar from 'components/shared/nav-bar';
import Footer from 'components/shared/footer';

export default function UserSignup () {
    return (
        <div>
            <NavBar/>

            <main id="content">
                <section className="py-7">
                    <div className="container">
                        <div className="row justify-content-center">
                            <SignUpForm />  
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body text-center pt-7 pb-6 px-0">
                                        <img src="images/contact-widget.jpg" alt="Want to become an Estate Agent ?" />
                                        <div className="text-dark mb-6 mt-n2 font-weight-500">Want to become an
                                        <p className="mb-0 fs-18">Estate Agent?</p>
                                        </div>
                                        <a href="agent-signup" class="btn btn-primary">Register</a>
                                    </div>
                                </div>
                            </div>       
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )

}

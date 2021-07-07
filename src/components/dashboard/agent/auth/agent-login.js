import React, { Component } from 'react';
import AgentLoginForm from './layouts/login-form';
import NavBar from '../../../shared/layouts/nav-bar';
import Footer from '../../../shared/layouts/footer'


const AgentLogin  =  () => {

        return (
            <div>
                <NavBar/>

                <main id="content">
                    <section className="py-7">
                        <div className="container">
                            <div className="row justify-content-center">
                                <AgentLoginForm />         
                            </div>
                        </div>
                    </section>
                </main>

                <Footer/>
            </div>
        )

}

export default AgentLogin;

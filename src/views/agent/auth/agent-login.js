import React, { Component } from 'react';
import AgentLoginForm from './components/login-form';
import Footer from 'components/shared/footer';
import NavBar from 'components/shared/nav-bar';

const AgentLogin  =  () => {

        return (
            <div>
                <NavBar />

                <main id="content">
                    <section className="py-7">
                        <div className="container">
                            <div className="row justify-content-center">
                                <AgentLoginForm />         
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        )

}

export default AgentLogin;

import React, { Component } from 'react';
import AgentLoginForm from './layouts/login-form';
import NavBar from '../../layouts/shared/nav-bar';
import Footer from '../../layouts/shared/footer';


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

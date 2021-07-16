import React, { Component } from 'react'
import AgentSignUpForm from './components/signup-form';
import NavBar from 'views/layouts/nav-bar';
import Footer from 'views/layouts/footer';

export default class AgentSignup extends Component {
    render() {
        return (
            <div>
                <NavBar/>

                <main id="content">
                    <section className="py-7">
                        <div className="container">
                            <div className="row justify-content-center">
                                <AgentSignUpForm />         
                            </div>
                        </div>
                    </section>
                </main>

                <Footer/>
            </div>
        )
    }
}

import React, { Component } from 'react'
import AgentSignUpForm from './components/signup-form';
import Footer from 'components/shared/footer';
import NavBar from 'components/shared/nav-bar';

export default class AgentSignup extends Component {
    render() {
        return (
            <div>
                <NavBar />

                <main id="content">
                    <section className="py-7">
                        <div className="container">
                            <div className="row justify-content-center">
                                <AgentSignUpForm />         
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        )
    }
}

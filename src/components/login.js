import React, { Component } from 'react';

import UserLoginForm from "./layouts/auth/login-form";
import NavBar from './shared/layouts/nav-bar';
import Footer from './shared/layouts/footer';

export default class UserLogin extends Component {
    render() {
        return (
            <div>
                <NavBar/>

                <main id="content">
                    <section className="py-7">
                        <div className="container">
                            <div className="row justify-content-center">
                                <UserLoginForm />         
                            </div>
                        </div>
                    </section>
                </main>

                <Footer/>
            </div>
        )
    }
}

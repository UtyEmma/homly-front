import React, { Component } from 'react'
import Footer from 'components/shared/footer';
import NavBar from 'components/shared/nav-bar';

export default class PasswordRecovery extends Component {
    render() {
        return (
            <div>
                <NavBar />
                
                <main id="content">
                    <section className="py-13">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-7 mx-auto">
                            <div className="card border-0 shadow-xxs-2 login-register">
                                <div className="card-body p-6">
                                <h2 className="card-title fs-30 font-weight-600 text-dark lh-16 mb-2">Forgot your password?</h2>
                                <p className="mb-4">Don’t have an account yet? <a href="signup-and-login.html" className="text-heading hover-primary"><u>Sign
                                        up for free</u></a></p>
                                <form className="form">
                                    <div className="form-group">
                                    <label htmlFor="email" className="text-heading">Enter your email address</label>
                                    <input type="email" name="mail" className="form-control form-control-lg border-0" id="email" placeholder="Enter your email address" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg rounded">Get new password
                                    </button>
                                </form>
                                <div className="divider text-center my-2">
                                    <span className="px-4 bg-white lh-17 text text-heading">
                                    or Sign Up with
                                    </span>
                                </div>
                                <div className="row no-gutters mx-n2">
                                    <div className="col-sm-6 px-2 mb-4">
                                    <a href="#" className="btn btn-lg btn-block text-heading border px-0 rounded bg-hover-accent">
                                        <img src="images/facebook.png" alt="Google" className="mr-2" />
                                        Facebook
                                    </a>
                                    </div>
                                    <div className="col-sm-6 px-2 mb-4">
                                    <a href="#" className="btn btn-lg btn-block text-heading border px-0 rounded bg-hover-accent">
                                        <img src="images/google.png" alt="Google" className="mr-2" />
                                        Google
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    </main>

                <Footer />
                
            </div>
        )
    }
}

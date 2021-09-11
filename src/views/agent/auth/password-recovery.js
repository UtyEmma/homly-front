import React, { Component, useState } from 'react'
import Footer from 'components/shared/footer';
import NavBar from 'components/shared/nav-bar';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import GoogleAuth from './socialite/google-auth';
import { useDispatch, useSelector } from 'react-redux';
import { RecoverPassword } from 'providers/redux/_actions/auth-action';
import { useHistory } from 'react-router-dom';
import { __recover_password } from 'libraries/validation/schema/auth-schema';
import { MapFormErrors } from 'libraries/validation';
import Validator from 'validatorjs';

export default function PasswordRecovery ({setIsLoading}) {
    
    const dispatch = useDispatch()
    const history = useHistory()

    const [formErrors, setFormErrors] = useState({})

    useEffect(() => {
        setIsLoading(false)
    })

    const recover_password = useSelector((state) => state.recover_password) 
    const {loading, success, error} = recover_password

    const {rules, messages, attributes} = __recover_password


    useEffect(() => {
        setIsLoading(loading)
    }, [loading])

    useEffect(() => {
        success && history.push('/reset-password')
    }, [success])

    const submitRecoveryRequest = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const values = Object.fromEntries(data.entries());
        let validation = new Validator(values, rules)
        validation.setAttributeNames(attributes);
        validation.fails(() => {setFormErrors(MapFormErrors(validation.errors.errors))})
        
        if (validation.passes()) {
            setFormErrors({}); 
            dispatch(RecoverPassword(values))
        }
    }
    
    return (
        <div>
            <Helmet>
                <title>Recover Password - Bayof Real Estate</title>
            </Helmet>

            <NavBar />
            
            <main id="content">
                <section className="py-13">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto">
                        <div className="card border-0 shadow-xxs-2 login-register">
                            <div className="card-body p-6">
                            <h2 className="card-title fs-30 font-weight-600 text-dark lh-16 mb-2">Forgot your password?</h2>
                            <p className="mb-4">Don’t have an account yet? <a href="signup/" className="text-heading hover-primary"><u>Sign
                                    up for free</u></a></p>
                            <form className="form" onSubmit={submitRecoveryRequest}>
                                <div className="form-group">
                                    <label htmlFor="email" className="text-heading">Enter your email address</label>
                                    <input type="email" name="email" className="form-control form-control-lg border-0" id="email" placeholder="Enter your email address" />
                                    <p className="text-danger fs-12 mt-1">{formErrors.email?.message}</p>
                                </div>
                                <div>
                                    <p className="mb-1">Select Account Type</p>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline1" name="type" value="agent" className="custom-control-input" />
                                    <label className="custom-control-label" for="customRadioInline1">Agent</label>
                                </div>

                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline2" name="type" value="tenant" className="custom-control-input" />
                                    <label className="custom-control-label" for="customRadioInline2">Tenant</label>
                                </div>
                                <p className="text-danger fs-12 mt-1">{formErrors.type?.message}</p>


                                <div className="mt-3">
                                    <button type="submit" className="btn btn-primary btn-lg rounded">Reset My password
                                    </button>
                                </div>
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
                                    <GoogleAuth />
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

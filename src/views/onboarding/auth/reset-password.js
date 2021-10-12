import React, { useState } from 'react'
import Footer from 'components/shared/footer';
import NavBar from 'components/shared/nav-bar';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PasswordReset } from 'providers/redux/_actions/auth-action';
import GoogleAuth from './socialite/google-auth';
import { __reset_password } from 'libraries/validation/schema/auth-schema';
import Validator from 'validatorjs';
import { MapFormErrors } from 'libraries/validation';
import { FacebookAuth } from './socialite/facebook-auth';
import { SelectRoleModal } from './components/select-role-modal';

export default function ResetPassword ({setIsLoading}) {
    
    const dispatch = useDispatch()

    const [formErrors, setFormErrors] = useState({})

    const [show, setShow] = useState(false)
    const [action, setAction] = useState()

    
    const {loading} = useSelector((state) => state.reset_password)    
    
    const {rules, attributes} = __reset_password
    
    const submitPasswordReset = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const values = Object.fromEntries(data.entries());
        let validation = new Validator(values, rules)
        validation.setAttributeNames(attributes);
        validation.fails(() => {setFormErrors(MapFormErrors(validation.errors.errors))})
        
        if (validation.passes()) {
            setFormErrors({}); 
            dispatch(PasswordReset(values))
        }
    }

    useEffect(() => {
        setIsLoading(loading)
    }, [loading, setIsLoading])

    return (
        <div>
            <Helmet>
                <title>Reset Password - Bayof Real Estate</title>
            </Helmet>

            <NavBar />
            
            <main id="content">
                <section className="py-13">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto">
                        <div className="card border-0 shadow-xxs-2 login-register">
                            <div className="card-body p-6">
                            <h2 className="card-title fs-30 font-weight-600 text-dark lh-16 mb-2">Reset your password?</h2>
                            <p className="mb-4">Don’t have an account yet? <Link to="/signup" className="text-heading hover-primary"><u>Sign
                                    up for free</u></Link></p>
                            <form className="form" onSubmit={submitPasswordReset}>
                                <div className="form-group">
                                    <label htmlFor="email" className="text-heading">Enter your email address</label>
                                    <input type="email" name="email" className="form-control form-control-lg border-0" id="email" placeholder="Enter your email address" />
                                    <p className="text-danger fs-12 mt-1">{formErrors.email?.message}</p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="text-heading">Enter Password Reset Token</label>
                                        <input type="text" name="token" className="form-control form-control-lg border-0" id="token" placeholder="Token" />
                                        <p className="text-danger fs-12 mt-1">{formErrors.token?.message}</p>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="password" className="text-heading">Enter New Password</label>
                                        <input type="password" name="password" className="form-control form-control-lg border-0" id="password" placeholder="Password" />
                                        <p className="text-danger fs-12 mt-1">{formErrors.password?.message}</p>
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




                                <button type="submit" className="btn btn-primary btn-lg rounded mt-2">Reset password
                                </button>
                            </form>
                            <div className="divider text-center my-2">
                                <span className="px-4 bg-white lh-17 text text-heading">
                                or Sign Up with
                                </span>
                            </div>
                            <div className="row no-gutters mx-n2">
                                <div className="col-sm-6 px-2 mb-4">
                                <FacebookAuth setShow={setShow} action={action} setAction={setAction} />
                                </div>
                                <div className="col-sm-6 px-2 mb-4">
                                    <GoogleAuth setShow={setShow} action={action} setAction={setAction} />
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
            <SelectRoleModal show={show} setShow={setShow}  setIsLoading={setIsLoading} action={action}  />            
        </div>
    )
}

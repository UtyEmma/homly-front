import React, { useEffect, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { AgentSignup } from '../../../../providers/redux/_actions/agent-actions';
import { toggleConPassword, togglePassword } from 'libraries/forms/toggle-password';
import * as Validator from 'validatorjs';
import { MapFormErrors } from 'libraries/validation/handlers/error-handlers';
import { __agent_signup } from 'libraries/validation';
import GoogleAuth from 'views/agent/auth/socialite/google-auth';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { FacebookAuth } from '../socialite/facebook-auth';


const AgentSignUpForm = () => {

    const agentSignup = useSelector((state) => state.agent_signup);
    const {loading, form_error, agent_success} = agentSignup;
    const [formErrors, setFormErrors] = useState({})

    const dispatch = useDispatch()
    const history = useHistory()
    
    const {rules} = __agent_signup

    const handleSignup = (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        // console.log(data)
        const values = Object.fromEntries(data.entries());
        let validation = new Validator(values, rules)
        validation.fails(() => {setFormErrors(MapFormErrors(validation.errors.errors))})
        
        if (validation.passes()) {
            setFormErrors({}); 
            dispatch(AgentSignup(values))
        } 
    } 

    const responseFacebook = (response) => {
        console.log(response)
    }

    useEffect(() => {
        agent_success && history.push('./agent-login?msg=Sign up Successful. Please Login')
        form_error && setFormErrors(form_error)
        form_error && console.log(form_error)
    }, [agent_success, form_error, history])

    return (
        <div className="col-lg-7">
            <div className="card border-0 shadow-xxs-2">
                <div className="card-body px-6 py-6">
                <h2 className="card-title fs-30 font-weight-600 text-dark lh-16 mb-2">Agent Sign Up</h2>
                <p className="mb-4">I am already an Agent <Link to="/agent-login" className="text-heading hover-primary"><u>Log in Here</u></Link></p>
                <form className="form" id="signupForm" onSubmit={handleSignup}>
                    <div className="form-row mx-n2">
                    <div className="col-sm-6 px-2">
                        <div className="form-group">
                        <label htmlFor="firstName" className="text-heading">First Name</label>
                        <input type="text"  name="firstname" className="form-control form-control-lg border-0" id="firstName" placeholder="John" />
                        <p className="text-danger fs-12 mt-1">{formErrors.firstname?.message}</p>
                        </div>
                    </div>
                    <div className="col-sm-6 px-2">
                        <div className="form-group">
                        <label htmlFor="lastName" className="text-heading">Last Name</label>
                        <input type="text" name="lastname" className="form-control form-control-lg border-0" id="lastName" placeholder="Doe" />
                        <p className="text-danger fs-12 mt-1">{formErrors.lastname?.message}</p>
                        </div>
                    </div>
                    </div>
                    <div className="form-row mx-n2">
                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                            <label htmlFor="email" className="text-heading">Email</label>
                            <input type="email" className="form-control form-control-lg border-0" id="email" placeholder="johndoe@homly.com" name="email" />
                            <p className="text-danger fs-12 mt-1">{formErrors.email?.message}</p>
                            </div>
                        </div>
                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                            <label htmlFor="username" className="text-heading">Username</label>
                            <div className="input-group input-group-lg">
                            <input type="username" className="form-control border-0 shadow-none" id="username" name="username" placeholder="Username" />
                            </div>
                            <p className="text-danger fs-12 mt-1">{formErrors.username?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-row mx-n2">
                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                            <label htmlFor="password-1" className="text-heading">Password</label>
                            <div className="input-group input-group-lg">
                            <input type="password" className="form-control border-0 shadow-none" id="password" name="password" placeholder="**********" />
                                <div className="input-group-append">
                                <button onClick={togglePassword} className="input-group-text bg-gray-01 border-0 text-body fs-18">
                                    <i className="far fa-eye-slash" />
                                </button>
                                </div>
                            </div>
                            <p className="text-danger fs-12 mt-1">{formErrors.password?.message}</p>
                            </div>
                        </div>
                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                            <label htmlFor="re-password">Re-Enter Password</label>
                            <div className="input-group input-group-lg">
                                <input type="password" className="form-control border-0 shadow-none" id="confirm_password" name="password_confirmation" placeholder="Password" />
                                <div className="input-group-append">
                                <button onClick={toggleConPassword} className="input-group-text bg-gray-01 border-0 text-body fs-18">
                                    <i className="far fa-eye-slash" />
                                </button>
                                </div>
                            </div>
                            <p className="text-danger fs-12 mt-1">{formErrors.confirm_password?.message}</p>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block rounded">
                            {loading ? 
                                    <div className="spinner-border text-white" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div> : "Sign up" }
                    </button>
                </form>
                <div className="divider text-center my-2">
                    <span className="px-4 bg-white lh-17 text text-heading">
                    or Sign Up with
                    </span>
                </div>
                <div className="row no-gutters mx-n2">
                    <div className="col-sm-6 px-2 mb-4">
                        <FacebookAuth user="agent" />
                    </div>
                    <div className="col-sm-6 px-2 mb-4">
                        <GoogleAuth user="agent" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AgentSignUpForm;

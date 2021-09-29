import React, { useEffect, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import GoogleAuth from '../socialite/google-auth';
import { togglePassword } from 'libraries/forms/toggle-password';
import Validator from 'validatorjs';
import { MapFormErrors } from 'libraries/validation/handlers/error-handlers';
import { __agent_login } from 'libraries/validation';
import { Login } from 'providers/redux/_actions/auth-action';
import { FacebookAuth } from '../socialite/facebook-auth';

const AgentLoginForm = () =>  {

    const agentLogin = useSelector((state) => state.user_data);
    const {user, type} = agentLogin;

    const input_error = useSelector((state) => state.login);
    const {loading, form_error} = input_error;

    const dispatch = useDispatch()
    const history = useHistory()
    const {rules} = __agent_login
    const [formErrors, setFormErrors] = useState({})

    const handleLogin = (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        const values = Object.fromEntries(data.entries());
        let validation = new Validator(values, rules)
        validation.fails(() => {setFormErrors(MapFormErrors(validation.errors.errors))})
        
        if (validation.passes()) {
            setFormErrors({}); 
            dispatch(Login(values, 'agent'));
        } 
    } 

    useEffect(() => {
       user && !user.isVerified && history.push('/verify')
    }, [user, history])

    useEffect(() => {
        user && user.isVerified && type === 'agent' && history.push('/dashboard', "Logout Successful")
    }, [user, type, history])

    useEffect(() => {
        form_error && setFormErrors(form_error)
    }, [form_error])

        return (
            <div className="col-lg-7">
                <div className="card border-0 shadow-xxs-2 mb-6">
                    <div className="card-body px-8">
                    <h2 className="card-title fs-30 font-weight-600 text-dark lh-16 mb-2">Log In as Agent</h2>
                    <p className="mb-4">Want to become an Agent? <Link to='/agent-signup' className="text-heading hover-primary"><u>Sign Up</u></Link></p>
                    <form className="form" onSubmit={handleLogin}>
                        <div className="form-group mb-4">
                        <label htmlFor="username-1">Email</label>
                        <input type="text" className="form-control form-control-lg border-0" id="email" placeholder="johndoe@homly.com" name="email" />
                        <p className="text-danger fs-12 mt-1">{formErrors.email?.message}</p>
                        </div>
                        <div className="form-group mb-4">
                        <label htmlFor="password-2">Password</label>
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
                        <div className="d-flex mb-4">
                            <Link to="/recover-password" className="d-inline-block ml-auto fs-13 lh-2 hover-primary text-body">
                                <u>Forgot your password?</u>
                            </Link>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block rounded">
                            {loading ? 
                                    <div className="spinner-border text-white" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div> : "Log in" }
                        </button>
                    </form>
                    <div className="divider text-center my-2">
                        <span className="px-4 bg-white lh-17 text text-heading">
                        or Log-in with
                        </span>
                    </div>
                    <div className="row no-gutters mx-n2">
                        <div className="col-sm-6 px-2 mb-4">
                            <FacebookAuth user='agent' />
                        </div>
                        <div className="col-sm-6 px-2 mb-4">
                            <GoogleAuth user="agent"/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
        
}

export default AgentLoginForm;

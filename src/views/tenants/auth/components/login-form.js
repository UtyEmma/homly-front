import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../../../providers/redux/_actions/user-actions';
import { useDispatch, useSelector } from 'react-redux';
import { __tenantlogin } from 'libraries/validation/schema/tenant-schema';
import GoogleAuth from 'views/agent/auth/socialite/google-auth';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from 'libraries/http/query';
// import ReactFacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Validator from 'validatorjs';
import { MapFormErrors } from 'libraries/validation';

const UserLoginForm = ({isLoading}) =>  {    
    const dispatch = useDispatch()
    const query = useQuery()
    const history = useHistory()

    const {rules, messages, attributes} = __tenantlogin
    const [formErrors, setFormErrors] = useState({})

    const user_login = useSelector(state => state.login)
    const {loading, success, formError} = user_login;

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        const values = Object.fromEntries(data.entries());
        let validation = new Validator(values, rules)
        validation.setAttributeNames(attributes);
        validation.fails(() => {setFormErrors(MapFormErrors(validation.errors.errors))})
        
        if (validation.passes()) {
            setFormErrors({}); 
            dispatch(login(data));
        }
    }

    useEffect(() => {
        isLoading(loading)
        if(formError){console.log(formError); setFormErrors(formError)}
        if(success){ history.push('/') }
    }, [success, formError])

    const responseFacebook = (response) => {
        console.log(response)
    }

    return (
        <div className="col-lg-7">
            <div className="card border-0 shadow-xxs-2 mb-6">
                <div className="card-body px-8">
                <h2 className="card-title fs-30 font-weight-600 text-dark lh-16 mb-2">Log In</h2>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control form-control-lg border-0" id="email" placeholder="johndoe@homly.com" name="email" />
                        <p className="text-danger fs-12 mt-1">{formErrors.email?.message}</p>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password">Password</label>

                        <div className="input-group input-group-lg">
                            <input type="password" className="form-control border-0 shadow-none" id="password" name="password" placeholder="**********" />
                            <div className="input-group-append">
                                <span className="input-group-text bg-gray-01 border-0 text-body fs-18">
                                    <i className="far fa-eye-slash" />
                                </span>
                            </div>
                        </div>
                        <p className="text-danger fs-12 mt-1">{formErrors.password?.message}</p>
                    </div>
                    <div className="d-flex mb-4">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="remember-me-1" name="remember" />
                        <label className="form-check-label" htmlFor="remember-me-1">
                        Stay signed in
                        </label>
                    </div>
                    <a href="recover-password" className="d-inline-block ml-auto fs-13 lh-2 text-body">
                        <u>Forgot your password?</u>
                    </a>
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
                        <FacebookLogin
                            appId="1003408093533632"
                            render={renderProps => (
                                <button onClick={renderProps.onClick} className="btn btn-lg btn-block text-heading border px-0 bg-hover-accent">
                                    <img src="images/facebook.png" alt="Google" className="mr-2" />
                                    Facebook
                                </button> 
                            )}
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            />
                    </div>
                    <div className="col-sm-6 px-2 mb-4">
                        <GoogleAuth user="tenant" />
                    </div>
                </div>
                <div className="text-center my-4">
                    <p className="mb-4">Don’t have an account yet?  
                        <a href="./signup" className="text-heading hover-primary">
                            <u> Sign up here</u>
                        </a>
                    </p>
                </div>
                </div>
            </div>
        </div>

    )
        
}

export default UserLoginForm;
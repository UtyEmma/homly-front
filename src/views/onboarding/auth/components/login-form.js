import React, { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import GoogleAuth from 'views/onboarding/auth/socialite/google-auth';
import { Link } from 'react-router-dom';
import Validator from 'validatorjs';
import { MapFormErrors, __login } from 'libraries/validation';
import { FacebookAuth } from 'views/onboarding/auth/socialite/facebook-auth';
import { SelectRoleModal } from './select-role-modal';

const UserLoginForm = ({setIsLoading}) =>  {    

    const {rules, attributes} = __login
    const [formErrors, setFormErrors] = useState({})

    const user_login = useSelector(state => state.login)
    const {formError} = user_login;

    const [show, setShow] = useState(false)
    const [action, setAction] = useState()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        const values = Object.fromEntries(data.entries());
        let validation = new Validator(values, rules)

        validation.setAttributeNames(attributes);
        
        validation.fails(() => {setFormErrors(MapFormErrors(validation.errors.errors))})
        
        if (validation.passes()) {
            setFormErrors({}); 
            setAction({type: 'login', data: data})
            setShow(true)
        }
    }

    useEffect(() => {
        formError && setFormErrors(formError)
    }, [formError])

    return (
        <div className="col-lg-7">
            <div className="card border-0 shadow-xxs-2 mb-6">
                <div className="card-body px-md-8">
                <h2 className="card-title fs-24 font-weight-600  text-heading text-dark lh-16 mb-2">Welcome back! Please Login</h2>

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
                        <Link to="/recover-password" className="d-inline-block ml-auto fs-13 lh-2 text-body">
                            <u>Forgot your password?</u>
                        </Link>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block rounded">Log in</button>
                </form>
                <div className="divider text-center my-2">
                    <span className="px-4 bg-white lh-17 text text-heading">
                    or Log-in with
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
                <div className="text-center my-4">
                    <p className="mb-4">Don’t have an account yet?  
                        <Link to="/signup" className="text-heading hover-primary">
                            <u> Sign up here</u>
                        </Link>
                    </p>
                </div>
                </div>
            </div>
            <SelectRoleModal show={show} setShow={setShow}  setIsLoading={setIsLoading} action={action}  />
        </div>

    )
        
}

export default UserLoginForm;
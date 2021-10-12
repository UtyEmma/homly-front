import React, {useEffect, useRef, useState} from 'react'
import { useSelector } from 'react-redux'
import { MapFormErrors, __signup } from 'libraries/validation';
import Validator from 'validatorjs';
import { Link, useHistory } from 'react-router-dom';
import GoogleAuth from 'views/onboarding/auth/socialite/google-auth';
import { FacebookAuth } from 'views/onboarding/auth/socialite/facebook-auth';
import { SelectRoleModal } from './select-role-modal';

const SignUpForm = ({setIsLoading}) =>  {

    const confirm_password = useRef()

    const [show, setShow] = useState(false)
    const [action, setAction] = useState()

    const {formError} = useSelector((state) => state.signup);

    const {rules, attributes} = __signup
    const [formErrors, setFormErrors] = useState({})

    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }
    

    const handleSignup = (e) => { 
        e.preventDefault()
        const data = new FormData(e.target);
        const values = Object.fromEntries(data.entries());
        let validation = new Validator(values, rules)
        validation.setAttributeNames(attributes);
        validation.fails(() => {setFormErrors(MapFormErrors(validation.errors.errors))})
        
        if (validation.passes()) {
            setFormErrors({}); 
            setAction({type: 'signup', data: data })            
            setShow(true)
        } 
    } 
    
    useEffect(() => {
        if(formError){setFormErrors(formError)}
    }, [formError])

    return (
        <div className="col-lg-7">
            <div className="card border-0 shadow-xxs-2 h-100">
                <div className="card-body px-6 py-6">
                <h2 className="card-title fs-30 font-weight-600 text-dark lh-16 mb-2">Sign Up</h2>
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
                                <input type="text" className="form-control form-control-lg border-0" id="email" placeholder="johndoe@homly.com" name="email" />
                                <p className="text-danger fs-12 mt-1">{formErrors.email?.message}</p>
                            </div>
                        </div>
                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                                <label htmlFor="username" className="text-heading">Username</label>
                                <div className="input-group input-group-lg">
                                    <input type="text" className="form-control border-0 shadow-none" id="username" name="username" placeholder="Username" />
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
                                <input type={showPassword ? "text" : "password"}  ref={confirm_password} className="form-control border-0 shadow-none" id="password" name="password" placeholder="**********" />
                                <div className="input-group-append">
                                    <button type="button" className="input-group-text bg-gray-01 border-0 text-body fs-18" onClick={togglePassword}>
                                        <i className={`far ${showPassword ? 'fa-eye' : 'fa-eye-slash' }`} />
                                    </button>
                                </div>
                            </div>
    
                            <p className="text-danger fs-12 mt-1">{formErrors.password?.message}</p>
                        </div>
                    </div>
                    <div className="col-sm-6 px-2">
                        <div className="form-group">
                            <label htmlFor="confirm_password">Re-Enter Password</label>
                                <div className="input-group input-group-lg">
                                    <input type={showPassword ? "text" : "password"} ref={confirm_password} className="form-control border-0 shadow-none" id="confirm_password" name="password_confirmation" placeholder="Password" />
                        
                                    <div className="input-group-append">
                                        <button type="button" className="input-group-text bg-gray-01 border-0 text-body fs-18" 
                                            onClick={togglePassword}>
                                            <i className={`far ${showPassword ? 'fa-eye' : 'fa-eye-slash' }`} />
                                        </button>
                                    </div>
                                </div>
                            <p className="text-danger fs-12 mt-1">{formErrors.confirm_password?.message}</p>
                        </div>
                    </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block rounded"> Sign up </button>
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
                    <div className="col-12 text-center">
                        <p className="mb-4">Already have an account? <Link to="/login" className="text-heading hover-primary text-center"><u>Log in</u></Link></p>
                    </div>
                </div>
            </div>

            <SelectRoleModal show={show} setShow={setShow} setIsLoading={setIsLoading} action={action} />
        </div>
    )
}

export default SignUpForm;
import React, {useEffect, useRef, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signup } from 'providers/redux/_actions/user-actions';
import { toggleConPassword, togglePassword } from 'libraries/forms/toggle-password';
import { MapFormErrors, __tenantsignup } from 'libraries/validation';
import Validator from 'validatorjs';
import { useHistory } from 'react-router-dom';

const SignUpForm = () =>  {
    const dispatch = useDispatch()
    const password = useRef()
    const confirm_password = useRef() 
    const history = useHistory()  

    const {loading, success, formError} = useSelector((state) => state.signup);

    const {rules, messages, attributes} = __tenantsignup
    const [formErrors, setFormErrors] = useState({})

    const handleSignup = (e) => { 
        e.preventDefault()
        const data = new FormData(e.target);
        const values = Object.fromEntries(data.entries());
        let validation = new Validator(values, rules)
        validation.setAttributeNames(attributes);
        validation.fails(() => {setFormErrors(MapFormErrors(validation.errors.errors))})
        
        if (validation.passes()) {
            setFormErrors({}); 
            dispatch(signup(data))
        } 
    } 
    
    useEffect(() => {
        if(formError){setFormErrors(formError)}
        if(success){ history.push('/login', {message: "Sign up Successful. Please Login"}) }
    }, [success, formError])

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
                            <label htmlFor="email" className="text-heading">Phone Number</label>
                            <input type="text" className="form-control form-control-lg border-0" id="phone" placeholder="+234 900 000 0000" name="phone" />
                            <p className="text-danger fs-12 mt-1">{formErrors.phone?.message}</p>
                        </div>
                    </div>
                    </div>
                    <div className="form-row mx-n2">
                    <div className="col-sm-6 px-2">
                        <div className="form-group">
                        <label htmlFor="password-1" className="text-heading">Password</label>
                        <div className="input-group input-group-lg">
                            <input type="password"  ref={confirm_password} className="form-control border-0 shadow-none" id="password" name="password" placeholder="**********" />
                            <div className="input-group-append">
                            <button className="input-group-text bg-gray-01 border-0 text-body fs-18" onClick={togglePassword}>
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
                            <input type="password" ref={confirm_password} className="form-control border-0 shadow-none" id="confirm_password" name="password_confirmation" placeholder="Password" />
                            <div className="input-group-append">
                            <button className="input-group-text bg-gray-01 border-0 text-body fs-18" 
                                    onClick={toggleConPassword}>
                                <i className="far fa-eye-slash" />
                            </button>
                            </div>
                        </div>
                        <p className="text-danger fs-12 mt-1">{formErrors.confirm_password?.message}</p>
                        </div>
                    </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block rounded">
                        Sign up
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
                    <div className="col-12 text-center">
                        <p className="mb-4">Already have an account? <a href="./login" className="text-heading hover-primary text-center"><u>Log in</u></a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;
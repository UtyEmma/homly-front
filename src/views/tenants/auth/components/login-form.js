import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../../../providers/redux/_actions/user-actions';
import { useDispatch, useSelector } from 'react-redux';
import { __tenantlogin } from 'libraries/validation/schema/tenant-schema';

const UserLoginForm = () =>  {    
    const dispatch = useDispatch()

    const user_login = useSelector(state => state.login)
    const {loading, success, error} = user_login;
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(__tenantlogin)
    });
    
    const handleSignup = (data) => {
        dispatch(login(data));
    }

    useEffect(() => {
        if(success){window.location.href = '/'} 
        error && toast.error(error)
    }, [success, error])

    const handleErrors = () => {
        toast.error("Invalid Input Data");
    }

    return (
        <div className="col-lg-7">
            <ToastContainer position="bottom-right"/>

            <div className="card border-0 shadow-xxs-2 mb-6">
                <div className="card-body px-8">
                <h2 className="card-title fs-30 font-weight-600 text-dark lh-16 mb-2">Log In</h2>
                <p className="mb-4">Don’t have an account yet?  
                    <a href="./signup" className="text-heading hover-primary">
                        <u> Sign up for free?</u>
                    </a>
                </p>

                <form className="form" id="loginForm" onSubmit={handleSubmit(handleSignup, handleErrors)}>
                    <div className="form-group mb-4">
                        <label htmlFor="email">Email</label>
                        <input type="text" {...register("email")} className="form-control form-control-lg border-0" id="email" placeholder="johndoe@homly.com" name="email" />
                        <p className="text-danger fs-14">{errors.email?.message}</p>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password">Password</label>

                        <div className="input-group input-group-lg">
                            <input type="password" {...register("password")} className="form-control border-0 shadow-none" id="password" name="password" placeholder="**********" />
                            <div className="input-group-append">
                                <span className="input-group-text bg-gray-01 border-0 text-body fs-18">
                                    <i className="far fa-eye-slash" />
                                </span>
                            </div>
                        </div>
                        <p className="text-danger fs-14">{errors.password?.message}</p>
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
                    <a href="#" className="btn btn-lg btn-block text-heading border px-0 bg-hover-accent">
                        <img src="images/facebook.png" alt="Google" className="mr-2" />
                        Facebook
                    </a>
                    </div>
                    <div className="col-sm-6 px-2 mb-4">
                    <a href="#" className="btn btn-lg btn-block text-heading border px-0 bg-hover-accent">
                        <img src="images/google.png" alt="Google" className="mr-2" />
                        Google
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
        
}

export default UserLoginForm;
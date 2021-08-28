import React, {Component, useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { AgentSignup } from '../../../../providers/redux/_actions/agent-actions';
import { AgentSignupSchema } from '../schema';
import { toggleConPassword, togglePassword } from 'libraries/forms/toggle-password';


const AgentSignUpForm = () => {
    const agentSignup = useSelector((state) => state.agent_signup);
    const {loading, agent_error, agent_success} = agentSignup;

    const dispatch = useDispatch()
    const history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(AgentSignupSchema)
    });

    const handleSignup = (data) => {
        dispatch(AgentSignup({...data}));
    } 

    useEffect(() => {
        if(agent_success){
            history.push('./agent-login')
        }
    }, [agent_success])


    const handleErrors = () => {
        toast.error("Invalid Input Data")
    }

    return (
        <div className="col-lg-7">
            <ToastContainer />
            <div className="card border-0 shadow-xxs-2">
                <div className="card-body px-6 py-6">
                <h2 className="card-title fs-30 font-weight-600 text-dark lh-16 mb-2">Sign Up</h2>
                <p className="mb-4">I am already an Agent <Link to="/agent-login" className="text-heading hover-primary"><u>Log in Here</u></Link></p>
                <form className="form" id="signupForm" onSubmit={handleSubmit(handleSignup, handleErrors)}>
                    <div className="form-row mx-n2">
                    <div className="col-sm-6 px-2">
                        <div className="form-group">
                        <label htmlFor="firstName" className="text-heading">First Name</label>
                        <input type="text" {...register("firstname")} name="firstname" className="form-control form-control-lg border-0" id="firstName" placeholder="John" />
                        <p className="text-danger fs-14">{errors.firstname?.message}</p>
                        </div>
                    </div>
                    <div className="col-sm-6 px-2">
                        <div className="form-group">
                        <label htmlFor="lastName" className="text-heading">Last Name</label>
                        <input type="text" {...register("lastname")} name="lastname" className="form-control form-control-lg border-0" id="lastName" placeholder="Doe" />
                        <p className="text-danger fs-14">{errors.lastname?.message}</p>
                        </div>
                    </div>
                    </div>
                    <div className="form-row mx-n2">
                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                            <label htmlFor="email" className="text-heading">Email</label>
                            <input type="text" {...register("email")} className="form-control form-control-lg border-0" id="email" placeholder="johndoe@homly.com" name="email" />
                            <p className="text-danger fs-14">{errors.email?.message}</p>
                            </div>
                        </div>
                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                            <label htmlFor="username" className="text-heading">Username</label>
                            <div className="input-group input-group-lg">
                            <input type="username" {...register("username")} className="form-control border-0 shadow-none" id="username" name="username" placeholder="Username" />
                            </div>
                            <p className="text-danger fs-14">{errors.username?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-row mx-n2">
                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                            <label htmlFor="password-1" className="text-heading">Password</label>
                            <div className="input-group input-group-lg">
                            <input type="password" {...register("password")} className="form-control border-0 shadow-none" id="password" name="password" placeholder="**********" />
                                <div className="input-group-append">
                                <button onClick={togglePassword} className="input-group-text bg-gray-01 border-0 text-body fs-18">
                                    <i className="far fa-eye-slash" />
                                </button>
                                </div>
                            </div>
                            <p className="text-danger fs-14">{errors.password?.message}</p>
                            </div>
                        </div>
                        <div className="col-sm-6 px-2">
                            <div className="form-group">
                            <label htmlFor="re-password">Re-Enter Password</label>
                            <div className="input-group input-group-lg">
                                <input type="password" {...register("confirm_password")} className="form-control border-0 shadow-none" id="confirm_password" name="confirm_password" placeholder="Password" />
                                <div className="input-group-append">
                                <button onClick={toggleConPassword} className="input-group-text bg-gray-01 border-0 text-body fs-18">
                                    <i className="far fa-eye-slash" />
                                </button>
                                </div>
                            </div>
                            <p className="text-danger fs-14">{errors.confirm_password?.message}</p>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block rounded">
                            {loading ? 
                                    <div class="spinner-border text-white" role="status">
                                        <span class="sr-only">Loading...</span>
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
    )
}

export default AgentSignUpForm;

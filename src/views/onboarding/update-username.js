import { MapFormErrors, __agent_updateUsername } from 'libraries/validation'
import { UpdateAgentProfile } from 'providers/redux/_actions/agent-actions'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Validator from 'validatorjs'

export default function UpdateUsername({agent, setIsLoading}) {

    const dispatch = useDispatch()
    const history = useHistory()

    const {token} = useSelector(state => state.user_data)
    const {loading, success, error} = useSelector(state => state.update_agent_profile)

    const {rules, attributes} = __agent_updateUsername
    const [formErrors, setFormErrors] = useState({})

    const updateUsername = (e) => {
        e.preventDefault()
        let data = new FormData(e.target)
        data.append('firstname', agent.firstname)
        data.append('lastname', agent.lastname)
        data.append('email', agent.email)
        data.append('title', agent.title)
        const values = Object.fromEntries(data.entries());
        let validation = new Validator(values, rules)
        validation.setAttributeNames(attributes);
        validation.fails(() => {setFormErrors(MapFormErrors(validation.errors.errors))})
        if (validation.passes()) {
            setFormErrors({}); 
            dispatch(UpdateAgentProfile(token, data));
        }
    }

    useEffect(() => {
        setIsLoading(loading)
    }, [loading])

    useEffect(() => {
        success && history.push('/dashboard')
    })

    useEffect(() => {
        error && error.formError && setFormErrors(error.formError)
    }, [error])

    
    return (
        <div className="bg-white" style={{height: '100vh'}}>
            <Helmet>
                <title>Onboarding</title>
                <meta name="description" content="Find Properties and agents around you." />
            </Helmet>

            <div className="row d-flex justify-content-center pb-0 pt-10" style={{height: '100%'}} >
                <div className="col-12 mb-0 pb-0 h-auto text-center">
                    <a href="/" className="mb-0">
                        <img src="/images/logo/bayof-logo.png"   width="102px" height="80px" alt="Bayof Logo" className="img-fluid d-none d-lg-inline-block" />
                    </a>
                </div>

                <div className="col-12 shadow-0 col-md-7 border-0 ">
                    <div className="row justify-content-between">

                    <div className="col-10 offset-1 col-md-5 offset-md-0 px-7 px-md-0">
                        <img src="images/svg/user-task.svg" alt="user task"  className="img-fluid" />
                    </div>

                    <div className="col-md-6 px-7 px-md-0 mt-6 mt-md-0">
                        <h3 className="text-heading mb-3 font-weight-bolder">One more step to go</h3>
                        <p className="fs-16">Please provide a username for your account</p>
                        <form onSubmit={updateUsername}>
                            <div className="form-group">
                                <label for="username" className="fs-15" ><i class="fa fa-user mr-1"></i> Username</label>
                                <input type="text" name="username" id="username" className="font-weight-normal form-control form-control-lg" placeholder="Your Username" />
                                <p className="text-danger fs-12 mt-1 mb-3">{formErrors.username?.message}</p>

                                <button type="submit" className="btn btn-primary btn-block fs-16">Proceed <i className="fa fa-angle-double-right"></i></button>
                            </div>
                        </form>
                    </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

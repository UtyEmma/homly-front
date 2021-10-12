import { errorToast } from 'libraries/response/http-error'
import { successToast } from 'libraries/response/response'
import { GetLoggedInUser, ResendVerificationEmail } from 'providers/redux/_actions/auth-action'
import React, { useCallback, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function VerifyEmail({user, setIsLoading}) {

    const dispatch = useDispatch()
    const history = useHistory()

    const user_data = useSelector(state => (state.user_data))
    const {token, type} = user_data

    const logged_user = useSelector(state => state.user)
    const {loading, auth_user, verify_email} = logged_user

    const resend_mail = useSelector(state => state.resend_mail)

    const fetchLoggedInUser = () => {
        dispatch(GetLoggedInUser(token, type)) 
    }

    const resendVerificationEmail = () => {
        dispatch(ResendVerificationEmail(token, type, user.unique_id))
    }

    useEffect(() =>{
        setIsLoading(loading)
    }, [loading, setIsLoading])

    const handleSetUser = useCallback(() => {
        successToast("Email Verified")
        type === 'tenant' ?  history.push('/') : history.push('/dashboard')
    }, [type, history])

    useEffect(() => {
        verify_email && history.push('/verify')
        verify_email  && errorToast("Email is Not Verified")
    }, [history, verify_email])

    useEffect(() => {
        !!auth_user && handleSetUser()
    }, [auth_user, handleSetUser])

    useEffect(() => {
        setIsLoading(resend_mail.loading)
    }, [resend_mail])
    
    return (
        <div className="bg-white" style={{height: '100vh'}}>
            <Helmet>
                <title>Verify Your Email</title>
                <meta name="description" content="Find Properties and agents around you." />
            </Helmet>

            <div className="row d-flex align-items-center justify-content-center" style={{height: '100%'}} >
                <div className="card shadow-0 col-md-7 p-5 py-9 border-0 text-center">

                    <div className="col-md-4 offset-md-4 col-6 offset-3 mt-4">
                        <img src="/images/svg/verify-email.svg" alt="verify email" width="150" className="img-fluid" />
                    </div>

                    <div className="col-12">
                        <h3 className="text-heading mt-5 mb-3 font-weight-bold">Please Verify your Email Address</h3>
                        <p>Hi, {user.firstname}! We have sent a verification link to <span className="font-weight-bold">{user.email}</span> with instructions</p>
                        <p>If the email doesn’t show up soon, check your spam folder.</p>

                        <div className="col-10 offset-1">
                            <button onClick={fetchLoggedInUser} className="btn btn-block btn-lg btn-primary mr-2" >I have Clicked the link</button>
                            <button className="btn btn-link mt-2" onClick={resendVerificationEmail}>Resend Verification Email</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

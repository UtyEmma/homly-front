import { VerifyEmailAddress } from 'providers/redux/_actions/auth-action'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'

export const EmailVerified = ({setIsLoading, user}) => {

    const {code} = useParams()
    const dispatch = useDispatch()
    const [url, setUrl] = useState()

    useEffect(() => {
        user && console.log(user)
    }, [user])

    const verify_email = useSelector(state => state.verify_email)
    const {loading, success, error} = verify_email

    const verifyEmail = () => {
        dispatch(VerifyEmailAddress(code))
    }

    useEffect(() => {
        setIsLoading(loading)
    }, [loading])


    useEffect(() => {
        !success && verifyEmail()
        success && console.log(success)
        success && success.type === 'tenant' ? setUrl('/login') : setUrl('/agent-login')
    }, [success])

    return (
        <>
            <div  style={{height: '100vh'}}>
                <Helmet>
                    <title>Email Verification</title>
                </Helmet>
                <div className="col-12 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100" >
                        <div className="card shadow-0 col-md-7 border-0 text-center">
                            {
                                success 
                                
                                ?

                                <EmailVerificationSuccess url={url} />

                                :

                                <EmailVerificationFailure/>
                            }
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}

export function EmailVerificationFailure ({url}) {
    return (
        <>
            <div className="col-md-6 offset-md-3 col-8 offset-2">
                <img src="/images/svg/action-error.svg" alt="Email verification" className="img-fluid" />
            </div>

            <div className="col-12">
                <h3 className="text-heading mt-5 mb-3 font-weight-bold">
                    Email Verification Failed.
                </h3>

                <div className="mt-md-5">
                    <p className="fs-18">Please confirm that you are using the correct link sent to your Email Address and try again!!!</p>
                </div>

                <p className="fs-14">If you are having a problem, please contact our <a href="mail:support@bayof.co">Support Center</a></p>
            </div>
        </>
    )
}

export function EmailVerificationSuccess ({url}) {
    return (
        <>
            <div className="col-md-4 offset-md-4 col-6 offset-3 mt-4">
                <img src="/images/svg/email-verified.svg" width="150" alt="Email verification" className="img-fluid" />
            </div>

            <div className="col-12">
                <h3 className="text-heading mt-5 mb-3 font-weight-bold">
                    Your Email has been verified Successfully.
                </h3>

                <div className="mt-md-5">
                    <p className="fs-18">Thank you, we have verified your email. Your Bayof account is active.  Please use the link below to login to your Account</p>
                </div>

                <Link to={url} className="btn btn-lg btn-primary mt-3" >Login to my Account<i className="fa fa-arrow-right ml-3"></i></Link>
            </div>
        </>
    )
}
